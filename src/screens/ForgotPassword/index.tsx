import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { styles } from './styles';
import { supabase } from '../../services/supabase';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export const ForgotPassword = () => {
  const [email, setEmail] = React.useState<string>('');
  const { goBack } = useNavigation();

  const resetPassword = async () => {
    if (!email) return Alert.alert(
      'Reset Password', 'You need to fill the email field.'
    );

    const { error } = await supabase.auth
    .resetPasswordForEmail(email);

    if (error) return Alert.alert('Error', error.message);
    else {
      Alert.alert('Reset password', 'Check your email for the link to reset your password.');
      setEmail('');
      goBack();
    }
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <LinearGradient
        colors={['#0D0D0D', '#23132A']}
        style={styles.background}
      />
      <AntDesign
        name='back'
        style={styles.goBack}
        color='#8257E6'
        size={26}
        onPress={goBack}
      />
      <View style={styles.wrapper}>
        <MaterialCommunityIcons
          name='email-send-outline'
          color='#03D361'
          size={50}
        />
        <Text style={styles.title}>
          Type your email to reset your password
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Your email'
          keyboardType='email-address'
          onChangeText={setEmail}
          placeholderTextColor={'#808080'}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={resetPassword}
        >
          <Text style={styles.textButton}>
            Reset password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}