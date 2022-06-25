import { useContext } from 'react';
import AuthContext from '../Contexts/AuthProvider';
import AuthInterface from '../Interfaces/Auth';

const defaultAuth : AuthInterface = {
  username: null,
  isLogged: false,
  accessToken: null
};

function useAuthContext() : AuthInterface {
  const context = useContext(AuthContext);
  return { ...defaultAuth, ...context };
}

export default useAuthContext;
