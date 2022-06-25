import { AxiosResponse } from 'axios';

interface Auth {
  username: string | null | undefined;
  isLogged: boolean;
  accessToken: string | null | undefined;
  handleLoginResponse?: (r : AxiosResponse) => Promise<any>
};

export default Auth;
