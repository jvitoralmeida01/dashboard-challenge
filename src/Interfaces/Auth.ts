import { AxiosResponse } from 'axios';

interface Auth {
  username: string | null | undefined;
  avatar: string | null | undefined;
  isLogged: boolean;
  accessToken: string | null | undefined;
  handleLoginResponse?: (r : AxiosResponse) => Promise<unknown>
};

export default Auth;
