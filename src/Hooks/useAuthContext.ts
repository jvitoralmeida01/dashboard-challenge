import { useContext } from 'react';
import AuthContext from '../Contexts/AuthProvider';

const defaultAttributes = {
  isLogged: false,
  setIsLogged: () => {}
};

function useAuthContext() : { isLogged : boolean, setIsLogged : (state : boolean) => void } {
  const context = useContext(AuthContext);
  return { ...defaultAttributes, ...context };
}

export default useAuthContext;
