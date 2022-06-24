import React, { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import LoginPage from './Pages/Login';
import DashboardPage from './Pages/Dashboard';
import BackgroundImage from './Components/BackgroundImage';

function App() : ReactElement {
  return (
    <Flex height="100vh" align="center" justify="center">
      <BackgroundImage />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Flex>
  );
}

export default App;
