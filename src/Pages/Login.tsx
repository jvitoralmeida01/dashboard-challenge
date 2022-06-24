import React, { ReactElement } from 'react';
import {
  Button, Flex, Heading, Image, Spacer, VStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../Components/FormInput';

function LoginPage() : ReactElement {
  const navigate = useNavigate();

  const handleClick = () : void => navigate('/dashboard');

  return (
    <Flex padding={12} height="100vh" width={['100vw', '80vw', '60vw', '50vw']} align="center" justify="center" background="neutral.900">
      <VStack spacing={8}>
        <Image src="/logo.svg" alt="logo" width={['50%', '60%', '100%']} />
        <Heading fontSize="150%" mb={2}>Entrar na plataforma</Heading>
        <Spacer />
        <FormInput label="E-mail" type="email" />
        <FormInput label="Senha" type="password" />
        <Spacer />
        <Button onClick={handleClick} variant="primary">Entrar</Button>
      </VStack>
    </Flex>
  );
}
export default LoginPage;
