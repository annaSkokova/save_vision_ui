import {Grid2} from "@mui/material";
import Container from "../../components/assets/Container/Container";
import * as React from "react";
import H1 from "../../components/assets/H1/H1";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from './Settings.module.scss';

import {Link} from "react-router-dom";

const Settings = () => {

  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 item size={6}>
          <Container className={styles.container}>
            <H1>Cameras</H1>
            <Stack direction="row" spacing={2}>
              <Link to="/cameras">
                <Button variant="contained" color="white">
                  Edit
                </Button>
              </Link>
            </Stack>
          </Container>
        </Grid2>
        <Grid2 item size={6}>
          <Container className={styles.container}>
            <H1>Notification preferences</H1>
            <Stack direction="row" spacing={2}>
              <Link to="/cameras">
                <Button variant="contained" color="white">
                  Edit
                </Button>
              </Link>
            </Stack>
          </Container>
        </Grid2>
        <Grid2 item size={6}>
          <Container className={styles.container}>
            <H1>User management </H1>
            <Stack direction="row" spacing={2}>
              <Link to="/cameras">
                <Button variant="contained" color="white">
                  Edit
                </Button>
              </Link>
            </Stack>
          </Container>
        </Grid2>
      </Grid2>
    </>
  )
}

export default Settings