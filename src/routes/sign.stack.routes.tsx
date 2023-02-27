import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { ForgotPassword } from '../screens/ForgotPassword';

const { Screen, Navigator } = createNativeStackNavigator();

export const SignRoutes = () => {
  return (
    <Navigator
      screenOptions={{ headerShown:false }}
    >
      <Screen
        name='SignIn'
        component={SignIn}
      />
      <Screen
        name='SignUp'
        component={SignUp}
      />
      <Screen
        name='ForgotPassword'
        component={ForgotPassword}
      />
    </Navigator>
  )
}