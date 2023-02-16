import { useContext } from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Alert
} from "react-native";
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles";

import { AuthContext } from '../../contexts/auth';

import Brand from '../../assets/brand.svg';

export const Header = () => {
  const { setIsAuth } = useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert('Logout', 'Do you want to logout?', [
      {
        text: 'Yes',
        onPress: () => setIsAuth(false)
      },
      {
        text: 'Cancel',
        style: 'cancel'
      }
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <MaterialIcons
        name='logout'
        size={26}
        color='#8257E6'
        style={styles.logout}
        onPress={handleLogout}
      />
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