import React, { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login';
import DashboardPage from './Pages/Dashboard';

function App() : ReactElement {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
