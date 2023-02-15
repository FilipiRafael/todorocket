import { StatusBar } from 'expo-status-bar';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />
      <SignIn />
    </>
  );
}
