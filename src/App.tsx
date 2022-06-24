import React, { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import LoginPage from './Pages/Login';
import DashboardPage from './Pages/Dashboard';
import BackgroundImage from './Components/BackgroundImage';

function App() : ReactElement {
  return (
    <Container height="100vh" centerContent>
      <BackgroundImage />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Container>
  );
}

export default App;
