import React, { ReactElement } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function LoginPage() : ReactElement {
  const navigate = useNavigate();

  const handleClick = () : void => navigate('/dashboard');

  return (
    <>
      <Text>Hello Login</Text>
      <Button onClick={handleClick}>Login</Button>
    </>
  );
}
export default LoginPage;
