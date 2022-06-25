import React, { ReactElement, useEffect } from 'react';
import {
  Button, Flex, Heading, Image, Spacer, useToast, VStack
} from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import FormInput from '../Components/FormInput';
import useAuthContext from '../Hooks/useAuthContext';
import API, { LOGIN_URL } from '../api';
import useToastSystem from '../Hooks/useToastSystem';

function LoginPage() : ReactElement {
  const navigate = useNavigate();
  const authContext = useAuthContext();
  const toastSystem = useToastSystem();

  const handleClick = () : void => {
    // API.post(LOGIN_URL, JSON.stringify({ email: 'admin', senha: 'admin' }))
    //   .then(authContext.handleLoginResponse)
    //   .catch(toastSystem.error);
    Cookies.set('access-token', '226875f91cf43e2b0c314ef9c2a9521d5808960cc5a759c16d66e92803771178');
    localStorage.setItem('username', 'edu');
  };

  if (authContext.isLogged) return <Navigate to="/dashboard" />;
  return (
    <Flex padding={12} height="100vh" width={['100vw', '80vw', '60vw', '50vw']} align="center" justify="center" background="neutral.900">
      <VStack spacing={8}>
        <Image src="/logo.svg" alt="logo" width={['50%', '60%', '100%']} />
        <Heading fontSize="150%" mb={2}>Entrar na plataforma</Heading>
        <Spacer />
        <FormInput label="E-mail" type="email" />
        <FormInput label="Senha" type="password" />
        <Spacer />
        <Button onClick={handleClick} variant="primary">
          Entrar
        </Button>
      </VStack>
    </Flex>
  );
}
export default LoginPage;
