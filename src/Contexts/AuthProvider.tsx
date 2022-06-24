import React, {
  createContext, useState, useMemo
} from 'react';

const AuthContext = createContext({});

interface AuthContextProps {
  children? : React.ReactNode;
}

export function AuthProvider({ children = null } : AuthContextProps) : React.ReactElement {
  const [isLogged, setIsLogged] = useState(false);

  const providerValue = useMemo(() => ({ isLogged, setIsLogged }), [isLogged, setIsLogged]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
