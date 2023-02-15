import { SafeAreaView, TextInput, View, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { styles } from "./styles";

import Brand from '../../assets/brand.svg';

export const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Brand style={styles.brand} />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder='Add a new task'
          placeholderTextColor='#808080'
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
        >
          <EvilIcons name='plus' size={30} color='#FFF' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}