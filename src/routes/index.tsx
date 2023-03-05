import 'react-native-gesture-handler';
import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../contexts/auth';

import { AppRoutes } from './app.stack.routes';
import { SignRoutes } from './sign.stack.routes';

export const Routes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuth ? <AppRoutes /> : <SignRoutes />}
    </NavigationContainer>
  )
}