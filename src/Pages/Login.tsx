import React, { ReactElement } from 'react';
import {
  Button, Flex, Text
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function LoginPage() : ReactElement {
  const navigate = useNavigate();

  const handleClick = () : void => navigate('/dashboard');

  return (
    <Flex height="100vh" width="90vw" maxWidth="894px" align="center" justify="center" background="#FFFFFF">
      <Text>Hello Login</Text>
      <Button onClick={handleClick}>Login</Button>
    </Flex>
  );
}
export default LoginPage;
