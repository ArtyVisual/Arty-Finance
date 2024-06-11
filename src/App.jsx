import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dash from './components/Dash';
import Expense from './components/Expense';
import AddExp from './components/Addexp';
import Addinc from './components/Addinc';
import Income from './components/Income';
import {BrowserRouter, RouterProvider, createBrowserRouter, Route, createRoutesFromElements, Routes, HashRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Balance from './components/Balance';


function App() {
 

  return (
    <div>

    <HashRouter>
      <Routes>

        <Route path="/Arty-Finance" element={<><Navbar /><Dash /><Footer/></>} />
        <Route path="/expense" element={<><Navbar /><Expense /></>} />
        <Route path="/addexpense" element={<><Navbar /><AddExp /></>} />
        <Route path="/income" element={<><Navbar /><Income /></>} />
        <Route path="/addincome" element={<><Navbar /><Addinc /></>} />
        <Route path="/balance" element={<><Navbar /><Balance /></>} />
       
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
