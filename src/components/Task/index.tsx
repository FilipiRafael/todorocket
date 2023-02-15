import { View, Text } from 'react-native';
import { styles } from './styles';

import { EvilIcons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';

export interface TaskProps {
  id: string;
  name: string;
  done: boolean;
}

export const Task = ({ name, done }: TaskProps) => {
  return (
    <View style={styles.container}>
      <CheckBox
        color='#03D361'
        style={styles.checkbox}
        value={done}
      />
      <Text style={done ? styles.textLineThrough : styles.text}>
        {name}
      </Text>
      <EvilIcons name='trash' size={36} color='#808080' />
    </View>
  )
}