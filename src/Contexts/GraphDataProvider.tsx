import React, {
  createContext, useState, useMemo, useEffect
} from 'react';
import Cookies from 'js-cookie';
import { AxiosResponse } from 'axios';
import API, { USER_URL } from '../api';

const GraphData = createContext({});

interface GraphDataProps {
  children? : React.ReactNode;
}

export function GraphDataProvider({ children = null } : GraphDataProps) : React.ReactElement {
  const i = 0;

  return (
    <GraphData.Provider value={i}>
      {children}
    </GraphData.Provider>
  );
}

export default GraphData;
