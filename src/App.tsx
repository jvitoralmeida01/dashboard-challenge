import React, { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box, Flex, Image } from '@chakra-ui/react';
import LoginPage from './Pages/Login';
import DashboardPage from './Pages/Dashboard';

function App() : ReactElement {
  return (
    <Flex height="100vh" align="center" justify="center">
      <Box background="#F6F6F9" style={{ position: 'absolute', zIndex: -1 }}>
        <Image src="/curve-patterns.svg" opacity={10} boxSize="100%" />
      </Box>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Flex>
  );
}

export default App;
