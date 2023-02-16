import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

import Brand from '../../assets/brand.svg';

export const SignUp = () => {
  const { navigate } = useNavigation();

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
            placeholder='Name'
            keyboardType='default'
            placeholderTextColor='#808080'
            style={styles.input}
          />

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