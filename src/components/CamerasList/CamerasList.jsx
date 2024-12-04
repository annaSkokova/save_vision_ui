
import * as React from 'react';
import {Grid2} from "@mui/material";
import Container from "../assets/Container/Container";
import ReactPlayer from 'react-player'

const CamerasList = () => {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 item size={6}>
          <Container>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/embed/-wSJg7wJs_0?autoplay=1&&mute=1&controls=0&loop=1&modestbranding=1&showinfo=0&hl=en&playlist=-wSJg7wJs_0"
                    frameBorder="0"></iframe>
          </Container>
        </Grid2>
        <Grid2 item size={6}>
          <Container>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/embed/IHMXXJNOyTQ?autoplay=1&&mute=1&controls=0&loop=1&modestbranding=1&showinfo=0&hl=en&playlist=IHMXXJNOyTQ"
                    frameBorder="0"></iframe>
          </Container>
        </Grid2>
      </Grid2>
    </>
  );
}

export default CamerasList