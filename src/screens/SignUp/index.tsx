import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { Video } from 'expo-av';

import Brand from '../../assets/brand.svg';

export const SignUp = () => {
  const video = React.useRef(null);

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

        <TextInput
          placeholder='Confirm password'
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
          >
            Come back to login
          </Text>
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}