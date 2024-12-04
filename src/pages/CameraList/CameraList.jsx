import {Grid2} from "@mui/material";
import Container from "../../components/assets/Container/Container";
import {useState} from "react";
import H1 from "../../components/assets/H1/H1";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect} from "react";
import axios from 'axios';
import {backendLink} from "../../variables";
import Spinner from "../../components/assets/Spinner/Spinner";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import * as React from "react";
import styles from "./CameraList.module.scss";


const CameraList = () => {
  const [loading, setLoading] = useState(false);
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    loadCameras()
  }, [])

  const loadCameras = () => {
    setLoading(true)
    axios.get(`${backendLink}/api/v1/ppe/cameras?limit=100&offset=0`)
      .then(function (response) {
        setLoading(false)
        setCameras(response.data.items)
      })
      .catch(function (error) {
        console.log("err> ", error);
        setLoading(false)
      })
  }

  const delCamera = (id) => {
    setLoading(true)
    axios.delete(`${backendLink}/api/v1/ppe/cameras/${id}`)
      .then(function (response) {
        setLoading(false)
        loadCameras()
      })
      .catch(function (error) {
        console.log("err> ", error);
        setLoading(false)
      })
  }

  return (
    <>
      {loading ? <Spinner/> :
        <Grid2 container spacing={2}>
          <Grid2 item size={12}>
            <Container>
              <H1>Cameras</H1>
              <TableContainer className={styles.table} component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell align="right">UUID</TableCell>
                      <TableCell align="right">RTSP url</TableCell>
                      <TableCell align="right">Active</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cameras.map((row) => (
                      <TableRow
                        key={row.uuid}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.uuid}</TableCell>
                        <TableCell align="right">{row.rtsp_url}</TableCell>
                        <TableCell align="right">{row.is_active ? 'Active' : 'Inactive'}</TableCell>
                        <TableCell align="right">
                          <Stack direction="row" spacing={2}>
                            <Link to={`/cameras/${row.uuid}`}>
                              <Button variant="contained" color="white">
                                Edit
                              </Button>
                            </Link>
                            <Button variant="contained" color="error" onClick={() => delCamera(row.uuid)}>
                              Delete
                            </Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Stack direction="row" spacing={2}>
                <Link to={`/cameras/create`}>
                  <Button variant="contained" color="success">
                    Create
                  </Button>
                </Link>
              </Stack>
            </Container>
          </Grid2>
        </Grid2>
      }
    </>
  )
}

export default CameraList;