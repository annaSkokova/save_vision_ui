import Menu from "../../components/Menu/Menu";
import {Grid2} from "@mui/material";
import Container from "../../components/assets/Container/Container";
import styles from "../Settings/Settings.module.scss";
import H1 from "../../components/assets/H1/H1";
import Stack from "@mui/material/Stack";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {useEffect, useState} from "react";
import axios from "axios";
import {backendLink} from "../../variables";
import Spinner from "../../components/assets/Spinner/Spinner";

const Violations = () => {
  const [loadingE, setLoadingE] = useState(false);
  const [loadingC, setLoadingC] = useState(false);
  const [events, setEvents] = useState([]);
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = () => {
    setLoadingE(true)
    setLoadingC(true)
    axios.get(`${backendLink}/api/v1/ppe/events?limit=100&offset=0`)
      .then(function (response) {
        console.log(response.data);
        setLoadingE(false)
        setEvents(response.data.items)
      })
      .catch(function (error) {
        console.log("err> ", error);
        setLoadingE(false)
      })

    axios.get(`${backendLink}/api/v1/ppe/cameras?limit=100&offset=0`)
      .then(function (response) {
        setLoadingC(false)
        setCameras(response.data.items)
      })
      .catch(function (error) {
        console.log("err> ", error);
        setLoadingC(false)
      })
  }

  const getCameraName = (uuid) => {
    console.log("111", uuid, cameras)
    const cam = cameras?.find(c => c.uuid === uuid)
    return cam !== undefined ? cam.name : ''
  }

  const updateEvent = (uuid, solution) => {
    axios.put(`${backendLink}/api/v1/ppe/events/${uuid}`,
      {
        is_analyzed: true,
        is_violation: solution,
        violation_type: " "
      })
      .then(function (response) {
        loadEvents()
      })
      .catch(function (error) {
        console.log("err> ", error);
        setLoadingE(false)
      })
  }

  return (
    <>
      {loadingE || loadingC || !cameras? <Spinner/> :
      <Grid2 container spacing={2}>
        <Grid2 item size={12}>
          <Container>
            <H1>Violations</H1>
            <Grid2 item size={12}>
              <TableContainer className={styles.table} component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell align="right">Date</TableCell>
                      <TableCell align="right">Type</TableCell>
                      <TableCell align="right">Camera</TableCell>
                      <TableCell align="right">Solution</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {events.map((row) => (
                      <TableRow
                        key={row.uuid}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <img src={row.image} alt=""/>
                        </TableCell>
                        <TableCell align="right">{new Date(row.timestamp).toLocaleString()}</TableCell>
                        <TableCell align="right">{row.violation_type}</TableCell>
                        <TableCell align="right">{getCameraName(row.camera)}</TableCell>
                        <TableCell align="right">
                          {
                            row.is_analyzed && row.is_violation && 'Not violation'
                          }
                          {
                            row.is_analyzed && !row.is_violation && 'Pass'
                          }
                          {
                            !row.is_analyzed && 'New'
                          }
                        </TableCell>
                        <TableCell align="right">
                          <Stack direction="row" spacing={2}>
                            <Button variant="contained" color="success" onClick={() => updateEvent(row.uuid, false)}>
                              Skip
                            </Button>
                            <Button variant="contained" color="error" onClick={() => updateEvent(row.uuid, true)}>
                              Violation
                            </Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid2>
          </Container>
        </Grid2>
      </Grid2>
      }
    </>
  )
}

export default Violations