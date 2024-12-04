import {Box, Grid2} from "@mui/material";
import Container from "../../components/assets/Container/Container";
import {useState} from "react";
import H1 from "../../components/assets/H1/H1";
import {useEffect} from "react";
import axios from 'axios';
import {backendLink} from "../../variables";
import Spinner from "../../components/assets/Spinner/Spinner";
import Button from "@mui/material/Button";
import * as React from "react";
import {Link, useParams} from 'react-router-dom';
import styles from './CameraEditCreate.module.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import {TextField} from "@mui/material";
import Stack from "@mui/material/Stack";



const CameraEditCreate = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("")
  const [rtspUrl, setRtspUrl] = useState("")
  const [isActive, setIsActive] = useState(true)

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true)
      axios.get(`${backendLink}/api/v1/ppe/cameras/${id}`)
        .then(function (response) {
          console.log(response.data);
          setLoading(false)
          setName(response.data.name);
          setRtspUrl(response.data.rtsp_url);
          setIsActive(response.data.is_active);
        })
        .catch(function (error) {
          console.log("err> ", error);
          setLoading(false)
        })
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    if (id) {
      axios.put(`${backendLink}/api/v1/ppe/cameras/${id}`, {
        name: name,
        rtsp_url: rtspUrl,
        is_active: isActive
      })
        .then(function (response) {
          setLoading(false)
        })
        .catch(function (error) {
          console.log("err> ", error);
          setLoading(false)
        });
    } else {
      axios.post(`${backendLink}/api/v1/ppe/cameras`, {
        name: name,
        rtsp_url: rtspUrl,
        is_active: isActive
      })
        .then(function (response) {
          setLoading(false)
        })
        .catch(function (error) {
          console.log("err> ", error);
          setLoading(false)
        });
    }
  }

  return (
    <>
      {loading ? <Spinner/> :
        <Grid2 container spacing={2}>
          <Grid2 item size={12}>
            <Container>
              <H1>{name !== '' ? "Camera - " + name : 'New camera'}</H1>
              <Grid2 container spacing={1}>
                <Grid2 item size={4}>
                  <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                      label="Name"
                      onChange={e => setName(e.target.value)}
                      required
                      variant="outlined"
                      color="white"
                      type="text"
                      value={name}
                      fullWidth
                      className={styles.field}
                    />
                    <TextField
                      label="RTSP"
                      onChange={e => setRtspUrl(e.target.value)}
                      required
                      variant="outlined"
                      color="white"
                      type="text"
                      value={rtspUrl}
                      fullWidth
                      className={styles.field}
                    />
                    <FormControlLabel className={styles.field} control={
                      <Checkbox
                        color="white"
                        className={styles.checkbox}
                        checked={isActive}
                        onChange={(event, checked) => setIsActive(checked)}
                      />
                    } label="Is active?" />

                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" color="white" type="submit">save</Button>
                      <Link to="/cameras">
                        <Button variant="text" color="white">
                          Back to cameras >
                        </Button>
                      </Link>
                    </Stack>
                  </form>
                </Grid2>
              </Grid2>
            </Container>
          </Grid2>
        </Grid2>
      }
    </>
  )
}

export default CameraEditCreate;