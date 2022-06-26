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
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null | undefined>(null);

  /**
   * Ensures auth persistence
   */
  useEffect(() => {
    const cookie = Cookies.get('access-token');
    const lsUsername = localStorage.getItem('username');
    const lsAvatar = localStorage.getItem('avatar');
    setAccessToken(cookie);
    setUsername(lsUsername);
    setAvatar(lsAvatar);
  }, []);
  useEffect(() => {
    if (accessToken) setIsLogged(true);
    else setIsLogged(false);
  }, [accessToken]);

  /**
   * Updates the accessToken and chains another request to update the user info
   * @param response - AxiosResponse after login request
   * @returns the response of the chained request
   */
  const handleLoginResponse = async (response : AxiosResponse) : Promise<AxiosResponse> => {
    // Updating the cookies with the incoming access token
    const prevToken = Cookies.get('access-token');
    const incomingToken = response?.data?.['access-token'];
    if (incomingToken !== prevToken) {
      Cookies.set('access-token', incomingToken);
    }
    setAccessToken(incomingToken);
    // Chaining user info request
    const userResponse = await API.get(USER_URL, {
      params: {
        'access-token': incomingToken
      }
    });
    // Updating the local storage with the user info
    if (userResponse?.data != null) {
      localStorage.setItem('username', userResponse.data.name);
      localStorage.setItem('avatar', userResponse.data.avatar);
      setUsername(userResponse.data.name);
      setAvatar(userResponse.data.avatar);
      setIsLogged(true);
    }
    return userResponse;
  };

  const providerValue : AuthInterface = useMemo(
    () => ({
      username, avatar, isLogged, accessToken, handleLoginResponse
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
