import 'react-native-gesture-handler';
import * as Sentry from 'sentry-expo';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';

import { AuthProvider } from './src/contexts/auth';
import { TasksProvider } from './src/contexts/tasks';

Sentry.init({
  dsn: "https://f84d6f08882e4a838fc73d3bf98be274@o4504815931162624.ingest.sentry.io/4504815940272128",
  enableInExpoDevelopment: true,
  debug: false,
  tracesSampleRate: 1.0
});

function App() {
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

export default App;