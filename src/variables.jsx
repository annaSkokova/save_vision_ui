import {createTheme} from "@mui/material/styles";

export const backendLink = 'http://localhost:8000';

export const theme = createTheme({
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: { main: 'rgb(102, 157, 246)' },
    background: { paper: 'rgb(5, 30, 52)' },
    white: { main: 'rgb(255, 255, 255)' },
  },
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
  },
})