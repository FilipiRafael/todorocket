import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
  Alert
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import Brand from '../../assets/brand.svg';
import { supabase } from '../../services/supabase';

export const SignIn = () => {
  const { navigate } = useNavigation();
  const { setIsAuth } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleSignIn = async () => {
    if (!email || !password) {
      return Alert.alert('Login', 'All the fields are required.');
    }

    let { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) Alert.alert('Error', error.message)
    else setIsAuth(true);
  }

  return (
    <KeyboardAvoidingView
      behavior='position'
      style={styles.container}
    >
      <ImageBackground
          source={require('../../assets/background.png')}
          style={styles.background}
        >
        <View style={styles.wrapper}>        
          <Brand style={styles.brand} />

          <Text style={styles.title}>
            The best way to predict the future is to create it
          </Text>

          <Text style={styles.subtitle}>
            Access your account
          </Text>

          <TextInput
            placeholder='Email'
            keyboardType='email-address'
            placeholderTextColor='#808080'
            style={styles.input}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder='Password'
            keyboardType='visible-password'
            secureTextEntry
            placeholderTextColor='#808080'
            style={styles.input}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleSignIn}
          >
            <Text
              style={styles.textButton}
            >
              Access
            </Text>
          </TouchableOpacity>

          <View style={styles.signWrapper}>
            <Text
              style={[styles.textButton, styles.signText]}
            >
              Any account?
            </Text>

            <Text
              style={[styles.signText, styles.signTextLink]}
              onPress={() => navigate('SignUp')}
            >
              Sign Up here
            </Text>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}