import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../contexts/auth';

import { Home } from '../screens/Home';
import { StackRoutes } from './stack.routes';

export const Routes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!isAuth ? <Home /> : <StackRoutes />}
    </NavigationContainer>
  )
}