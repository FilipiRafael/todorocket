import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';

import { AuthProvider } from './src/contexts/auth';
import { TasksProvider } from './src/contexts/tasks';

export default function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <StatusBar
          style="light"
          backgroundColor='transparent'
          translucent
        />
        <Routes />
      </TasksProvider>
    </AuthProvider>
  );
}
