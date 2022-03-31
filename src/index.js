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
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import Dashboard from './Dashboard'
import Merch from './Merch';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/intro" element={<App />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/riders" element={<RidersPage/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/reset" element={<Reset/>} />
        <Route path="/merch" element={<Merch/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
