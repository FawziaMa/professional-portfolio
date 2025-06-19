import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Storage from './Storage';
import User from './Users';


export default function App() {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/storage" element={isAuthenticated ? <SearchStorage /> : <Navigate to="/" />} />
        <Route path="/create-user" element={isAuthenticated ? <CreateUser /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}