import { View, Image } from 'react-native';
import { styles } from './styles';

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/loginbg.png')}
        style={styles.image}
      />
    </View>
  )
}