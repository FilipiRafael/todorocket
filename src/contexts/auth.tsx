import { createContext, useState } from 'react';

export const AuthContext = createContext<any>({});

export function AuthProvider({children}: any) {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};