import axios from 'axios';

export default axios.create({
  baseURL: 'https://628bf017667aea3a3e387e51.mockapi.io/'
});

export const LOGIN_URL = '/login';
export const USER_URL = '/me';
export const SALES_URL = '/sells-per-month';
export const PROFITMONTH_URL = '/profit-per-month';
