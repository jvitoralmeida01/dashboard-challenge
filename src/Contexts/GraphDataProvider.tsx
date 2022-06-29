import React, {
  createContext, useState, useMemo, useEffect
} from 'react';
import Cookies from 'js-cookie';
import { AxiosResponse } from 'axios';
import API, { SALES_URL, PROFITMONTH_URL } from '../api';
import useAuthContext from '../Hooks/useAuthContext';
import useToastSystem from '../Hooks/useToastSystem';

const GraphData = createContext({});

interface GraphDataProps {
  children? : React.ReactNode;
}

export function GraphDataProvider({ children = null } : GraphDataProps) : React.ReactElement {
  const authContext = useAuthContext();
  const toastSystem = useToastSystem();
  const [salesData, setSalesData] = useState<Array<any> | null>(null);
  const [profitPerMonth, setProfitPerMonth] = useState< Array<Record<number, number>> | null>(null);

  const getProfitPerMonth = async () : Promise<Array<Record<number, number>> | Error> => {
    if (authContext.isLogged && authContext.accessToken) {
      return API.get(PROFITMONTH_URL)
        .then((response: AxiosResponse) : Array<Record<number, number>> => {
          setProfitPerMonth(response?.data);
          return response?.data;
        });
    }
    return Promise.reject(new Error('Not logged in'));
  };

  const getSalesData = async () : Promise<unknown> => {
    if (authContext.isLogged && authContext.accessToken) {
      return API.get(SALES_URL)
        .then((response: AxiosResponse) : Array<any> => {
          setSalesData(response?.data);
          return response?.data;
        });
    }
    return Promise.reject(new Error('Not logged in'));
  };

  const providerValue = React.useMemo(
    () => ({
      salesData, getSalesData, getProfitPerMonth
    }),
    [salesData, getSalesData, getProfitPerMonth]
  );

  return (
    <GraphData.Provider value={providerValue}>
      {children}
    </GraphData.Provider>
  );
}

export default GraphData;
