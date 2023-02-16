import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';

import { AuthProvider } from './src/contexts/auth';

export default function App() {
  return (
    <AuthProvider>
      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />
      <Routes />
    </AuthProvider>
  );
}
