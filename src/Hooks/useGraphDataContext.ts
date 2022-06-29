import { useContext } from 'react';
import GraphData from '../Contexts/GraphDataProvider';

function useGraphDataContext() : any {
  const context = useContext(GraphData);
  return { ...context };
}

export default useGraphDataContext;
