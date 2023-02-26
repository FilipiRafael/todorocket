import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

import { supabase } from '../../services/supabase';

import Brand from '../../assets/brand.svg';

export const SignUp = () => {
  const { navigate, goBack } = useNavigation();

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

    if (error) Alert.alert('Error', error.message);
    else {
      Alert.alert(
        'Create Account', 'Check your email to confirm your account.', [
          {
            text: 'Ok',
            onPress: () => goBack()
          }
        ]
      );
    }
  }

  return (
    <KeyboardAvoidingView
      behavior='position'
      style={styles.container}
    >
      <LinearGradient
        colors={['#0D0D0D', '#23132A']}
        style={styles.background}
      />
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
          keyboardType='default'
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
    </KeyboardAvoidingView>
  )
}