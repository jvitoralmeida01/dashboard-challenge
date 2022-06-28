import React, { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import LoginPage from './Pages/Login';
import DashboardPage from './Pages/Dashboard';
import BackgroundImage from './Components/BackgroundImage';
import useAuthContext from './Hooks/useAuthContext';

function App() : ReactElement {
  return (
    <>
      <BackgroundImage />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
