import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

import Brand from '../../assets/brand.svg';

export const SignIn = () => {
  return (
    <KeyboardAvoidingView
      behavior='position'
      style={styles.container}
    >
      <View style={styles.wrapper}>
        <Image
          source={require('../../assets/loginbg.png')}
          style={styles.image}
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

          <Text style={[styles.signText, styles.signTextLink]}>
            Sign Up here
          </Text>
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}