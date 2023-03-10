import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { supabase } from '../../services/supabase';
import { LinearGradient } from 'expo-linear-gradient';

export const SignIn = () => {
  const { navigate } = useNavigation<any>();
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

    if (error) Alert.alert('Error', error.message);
    else setIsAuth(true);
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
        <Image
          source={require('../../assets/brand.png')}
          style={styles.brand}
          resizeMode='contain'
        />

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
          keyboardType='default'
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
    </KeyboardAvoidingView>
  )
}