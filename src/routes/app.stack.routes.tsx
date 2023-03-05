import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Support } from '../screens/Support';

const { Screen, Navigator } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='Support'
        component={Support}
      />
    </Navigator>
  )
}