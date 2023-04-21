import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as ROUTES from './pages/Routes.js';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME_ROUTE} element={<Home />} exact />
        <Route path={ROUTES.ABOUT_ROUTE} element={<About />} exact />
        <Route path={ROUTES.CONTACT_ROUTE} element={<Contact />} exact />
      </Routes>
    </>
  );
}

