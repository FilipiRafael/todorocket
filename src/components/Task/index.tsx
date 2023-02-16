import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { EvilIcons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';

export interface TaskProps {
  id: string;
  name: string;
  done: boolean;
}

export const Task = (task: TaskProps) => {

  const handleTaskDelete = (task: TaskProps) => {
    Alert.alert('Remove', `Remove the task ${task.name}?`, [
      {
        text: 'Yes',
        onPress: () => Alert.alert('Successfully removed')
      },
      {
        text: 'Cancel',
        style: 'cancel'
      }
    ]);
  }

  return (
    <View
      style={[styles.container, task.done && styles.containerDone]}
    >
      <CheckBox
        color='#03D361'
        style={styles.checkbox}
        value={task.done}
      />
      <Text
        style={task.done ? styles.textLineThrough : styles.text}
      >
        {task.name}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleTaskDelete(task)}
      >
        <EvilIcons name='trash' size={36} color='#808080' />
      </TouchableOpacity>
    </View>
  )
}