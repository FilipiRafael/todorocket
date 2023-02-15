import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </>
  );
}
