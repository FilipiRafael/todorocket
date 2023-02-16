import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import Brand from '../../assets/brand.svg';

import { Video } from 'expo-av';

export const SignIn = () => {
  const video = React.useRef(null);
  const { navigate } = useNavigation();
  const { setIsAuth } = React.useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      behavior='position'
      style={styles.container}
    >
      <View style={styles.wrapper}>
      <Video
        ref={video}
        style={styles.background}
        source={require('../../assets/video.mp4')}
        shouldPlay
        isLooping
        isMuted
      />

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
        />

        <TextInput
          placeholder='Password'
          keyboardType='visible-password'
          placeholderTextColor='#808080'
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => setIsAuth(true)}
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