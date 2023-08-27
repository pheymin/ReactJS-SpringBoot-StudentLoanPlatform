import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Borrower from './pages/Borrower';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/borrower" element={<Borrower />}>
          <Route path="dashboard" element={<Borrower />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
