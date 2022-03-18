import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Navbar from './Navbar';
import ContactPage from './ContactPage';
import DriversPage from './DriversPage';
import RidersPage from './RidersPage';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/riders" element={<RidersPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
