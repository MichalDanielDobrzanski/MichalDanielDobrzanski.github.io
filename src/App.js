import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import * as ROUTES from './pages/Routes.js';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PlanterHome from './pages/PlanterHome';
import About from './pages/About';
import Contact from './pages/Contact';
import PlanterPrivacyPolicy from './pages/PlanterPrivacyPolicy.js';
import PlanterTC from './pages/PlanterTC.js';
import HourglassPrivacyPolicy from './pages/HourglassPrivacyPolicy.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A6EAC5',
    },
    secondary: {
      main: '#75B896',
    },
    background: {
      default: '#FAFDF7'
    }
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        https://michaldanieldobrzanski.github.io/
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <AppTheme>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <Navbar />
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} exact />
            <Route path={ROUTES.PLANTER_HOME_ROUTE} element={<PlanterHome />} exact />
            <Route path={ROUTES.ABOUT_ROUTE} element={<About />} exact />
            <Route path={ROUTES.CONTACT_ROUTE} element={<Contact />} exact />
            <Route path={ROUTES.PLANTER_PRIVACY_POLICY} element={<PlanterPrivacyPolicy />} exact />
            <Route path={ROUTES.HOURGLASS_PRIVACY_POLICY} element={<HourglassPrivacyPolicy />} exact />
            <Route path={ROUTES.PLANTER_TC} element={<PlanterTC />} exact />
          </Routes>
        </>


        <Box sx={{
          p: 6
        }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Oscillator Michał Dobrzański
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Created by Michał Dobrzański
          </Typography>
          <Copyright />
        </Box>
      </ThemeProvider>
    </AppTheme>
  );
}

function AppTheme(props) {
  const { children } = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

AppTheme.propTypes = {
  children: PropTypes.node.isRequired,
};