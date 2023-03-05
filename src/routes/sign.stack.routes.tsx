import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

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
    </Navigator>
  )
}