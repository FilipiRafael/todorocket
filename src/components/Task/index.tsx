import { useContext, useRef } from 'react';
import { Text, Alert, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import Animated, { SlideInRight } from 'react-native-reanimated';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import { styles } from './styles';

import { EvilIcons } from '@expo/vector-icons';

import { supabase } from '../../services/supabase';
import { TasksContext } from '../../contexts/tasks';

export interface TaskProps {
  id: string;
  description: string;
  done: boolean;
  playAnimation: () => void;
}

export const Task = (task: TaskProps) => {
  const { setTasks } = useContext(TasksContext);

  const handleCheckTask = async (task: TaskProps) => {
    const { error } = await supabase
    .from('tasks')
    .update({ done: task.done ? false : true })
    .eq('id', task.id);

    const { data } = await supabase
    .from('tasks')
    .select()
    .order('created_at', { ascending: true });

    if (error) return Alert.alert('Error', error.message);
    setTasks(data);

    if (data!.filter((task: TaskProps) => task.done).length === data!.length) {
      task.playAnimation();
    }
  }

  const handleTaskDelete = (task: TaskProps) => {
    Alert.alert('Remove', `Remove the task ${task.description}?`, [
      {
        text: 'Yes',
        onPress: async () => {
          const { error } = await supabase
          .from('tasks')
          .delete()
          .eq('id', task.id);

          if (error) return Alert.alert('Error', error.message);
          else {
            const { data } = await supabase
            .from('tasks')
            .select()
            .order('created_at', { ascending: true });

            setTasks(data);
            Alert.alert('Successfully removed');
          }
        }
      },
      {
        text: 'Cancel',
        style: 'cancel'
      }
    ]);
  }

  return (
    <Animated.View
      style={[styles.container, task.done && styles.containerDone]}
      entering={SlideInRight}
    >
      <Pressable
        onPress={() => handleCheckTask(task)}
        style={styles.checkbox}
      >
        <AnimatedCheckbox
          checked={task.done}
          highlightColor="#03D361"
          checkmarkColor="#ffffff"
          boxOutlineColor="#03D361"
        />
      </Pressable>
      <Text
        style={task.done ? styles.textLineThrough : styles.text}
      >
        {task.description}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleTaskDelete(task)}
      >
        <EvilIcons name='trash' size={36} color='#808080' />
      </TouchableOpacity>
    </Animated.View>
  )
}