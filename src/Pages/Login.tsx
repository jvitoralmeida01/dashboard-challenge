import React, { ReactElement } from 'react';
import {
  Button, Center, Flex, Heading, Image, Spacer, VStack
} from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import FormInput from '../Components/FormInput';
import useAuthContext from '../Hooks/useAuthContext';
import API, { LOGIN_URL } from '../api';
import useToastSystem from '../Hooks/useToastSystem';
import logoImagePath from '../Assets/logo.svg';

function LoginPage() : ReactElement {
  const authContext = useAuthContext();
  const toastSystem = useToastSystem();

  const handleClick = () : void => {
    API.post(LOGIN_URL, JSON.stringify({ email: 'admin', senha: 'admin' }))
      .then(authContext.handleLoginResponse)
      .catch(toastSystem.error);
  };

  if (authContext.isLogged) return <Navigate to="/dashboard" />;
  return (
    <Center>
      <Flex padding={12} height="100vh" width={['100vw', '80vw', '60vw', '50vw']} align="center" justify="center" background="neutral.900">
        <VStack spacing={8}>
          <Image src={logoImagePath} alt="logo" width={['50%', '60%', '100%']} />
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
    </Center>
  );
}
export default LoginPage;
