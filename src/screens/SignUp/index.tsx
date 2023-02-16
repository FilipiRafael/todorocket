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
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import { supabase } from '../../services/supabase';
import { AuthContext } from '../../contexts/auth';

import Brand from '../../assets/brand.svg';

export const SignUp = () => {
  const { navigate } = useNavigation();
  const { setIsAuth } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleSignUp = async () => {
    if (!email || !password) {
      return Alert.alert('Login', 'All the fields are required.');
    }

    let { error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) Alert.alert('Error', error.message)
    else {
      const { data: { user } } = await supabase.auth.getUser();
      
      await supabase
      .from('tasks')
      .insert({ description: 'Onboarding', user_id: user!.id });

      setIsAuth(true);
    }
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
            Create your account
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
            placeholderTextColor='#808080'
            style={styles.input}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleSignUp}
          >
            <Text
              style={styles.textButton}
            >
              Create and access
            </Text>
          </TouchableOpacity>

          <View style={styles.signWrapper}>
            <Text
              style={[styles.textButton, styles.signText, styles.signTextLink]}
              onPress={() => navigate('SignIn')}
            >
              Come back to login
            </Text>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}