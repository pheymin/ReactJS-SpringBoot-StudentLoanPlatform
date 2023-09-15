import React from 'react';
import { Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Borrower from './pages/Borrower';
import LoanApplication from './pages/LoanApplication';
import ManageUser from './pages/ManageUser';
import UpdateUser from './pages/UpdateUser';
import LoanListing from './pages/LoanListing';
import ViewLoan from './pages/ViewLoan';
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
        <Route path="/borrower">
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Borrower />} />
          <Route path="loan-application" element={<LoanApplication />} />
        </Route>
        <Route path="/admin">
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="manage-user" element={<ManageUser />} />
          <Route path="update-user" element={<UpdateUser />}/>
          <Route path='view-loan' element={<ViewLoan/>}/>
        </Route>
        <Route path="/lender">
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="loan" element={<LoanListing />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
