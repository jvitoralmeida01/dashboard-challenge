import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthContext from '../Hooks/useAuthContext';

function DashboardPage() : React.ReactElement {
  const authContext = useAuthContext();

  if (!authContext.isLogged) return <Navigate to="/login" />;
  return <div>{authContext.accessToken}</div>;
}

export default DashboardPage;
