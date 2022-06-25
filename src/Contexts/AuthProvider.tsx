import React, {
  createContext, useState, useMemo, useEffect
} from 'react';
import Cookies from 'js-cookie';
import { AxiosResponse } from 'axios';
import AuthInterface from '../Interfaces/Auth';
import API, { USER_URL } from '../api';

const AuthContext = createContext({});

interface AuthContextProps {
  children? : React.ReactNode;
}

export function AuthProvider({ children = null } : AuthContextProps) : React.ReactElement {
  const [username, setUsername] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null | undefined>(null);

  useEffect(() => {
    const cookie = Cookies.get('access-token');
    const usr = localStorage.getItem('username');
    setAccessToken(cookie);
    setUsername(usr);
  }, []);

  useEffect(() => {
    if (username && accessToken) setIsLogged(true);
    else setIsLogged(false);
  }, [username, accessToken]);

  const handleLoginResponse = async (response : AxiosResponse) : Promise<AxiosResponse> => {
    const prevToken = Cookies.get('access-token');
    const incomingToken = response?.data?.['access-token'];
    if (incomingToken !== prevToken) {
      Cookies.set('access-token', incomingToken);
    }
    setAccessToken(incomingToken);
    const userResponse = await API.get(USER_URL, {
      params: {
        'access-token': incomingToken
      }
    });
    if (userResponse?.data) {
      localStorage.setItem('username', userResponse?.data?.username);
      setUsername(userResponse.data.username);
      setIsLogged(true);
    }
    return userResponse;
  };

  const providerValue : AuthInterface = useMemo(
    () => ({
      username, isLogged, accessToken, handleLoginResponse
    }),
    [username, isLogged, accessToken]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
