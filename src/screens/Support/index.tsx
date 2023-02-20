import { useRef } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

import LottieView from 'lottie-react-native';

export const Support = () => {
  const animation = useRef<any>();
  const { goBack } = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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

      <TextInput
        style={styles.input}
        placeholder='Say something nice...'
        placeholderTextColor='#808080'
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
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
    </SafeAreaView>
  )
}