
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Dashboard from "./pages/Dashboard/Dashboard";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import Violations from "./pages/Violations/Violations";
import NoMatch from "./pages/NoMatch/NoMatch";
import Menu from "./components/Menu/Menu";
import {Box, Grid2} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import CameraList from "./pages/CameraList/CameraList";
import {theme} from "./variables";
import CameraEditCreate from "./pages/CameraEditCreate/CameraEditCreate";


function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <Grid2 container spacing={1}>
            <Grid2 item size={2}>
              <Menu/>
            </Grid2>
            <Grid2 item size={10}>
              <div className="content_wrapper">
                <Routes>
                  <Route path='/' element={<Dashboard/>}/>
                  <Route path='/reports' element={<Reports/>}/>
                  <Route path='/setting' element={<Settings/>}/>
                  <Route path='/violations' element={<Violations/>}/>
                  <Route path='/cameras' element={<CameraList/>}/>
                  <Route path="/cameras/:id" element={<CameraEditCreate />} />
                  <Route path="/cameras/create" element={<CameraEditCreate />} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </div>
            </Grid2>
          </Grid2>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;