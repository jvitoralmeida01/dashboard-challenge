import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  auth?: boolean;
}

function DashboardPage({ auth = false }: Props) : React.ReactElement {
  if (auth) {
    return <div>authorized</div>;
  }
  return (
    <Navigate to="/login" />
  );
}

export default DashboardPage;
