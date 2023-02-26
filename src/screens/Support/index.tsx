import { useRef } from 'react';
import { SafeAreaView, Text, Linking, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { Stripe } from '../../services/stripe';

import LottieView from 'lottie-react-native';

export const Support = () => {
  const animation = useRef<any>();
  const { goBack } = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Stripe>
        <LinearGradient
          colors={['#220b2d', '#0D0D0D']}
          style={styles.background}
        />
        <AntDesign
          name='back'
          style={styles.goBack}
          color='#8257E6'
          size={26}
          onPress={goBack}
        />

        <Text style={styles.title}>
          Buy me a coffee
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => Linking.openURL('https://donate.stripe.com/test_7sI5lH9pocXLg6c8ww')}
        >
          <Text
            style={styles.buttonText}
          >
            Support $1
          </Text>
        </TouchableOpacity>

        <LottieView
          source={require('../../assets/developer.json')}
          style={styles.animation}
          ref={animation}
          progress={1}
          speed={1}
          autoPlay
          loop
        />
      </Stripe>
    </SafeAreaView>
  )
}