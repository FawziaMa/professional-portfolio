// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './Login';
import Storage from './Storage';       // Search storage page
import Users from './Users';           // Create user page


export default function App() {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/storage"
          element={isAuthenticated ? <Storage /> : <Navigate to="/" />}
        />
        <Route
          path="/users"
          element={isAuthenticated ? <Users /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
