import { useContext } from 'react';
import { Text, Alert, TouchableOpacity, Pressable } from 'react-native';
import Animated, { SlideInRight } from 'react-native-reanimated';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './styles';

import { supabase } from '../../services/supabase';
import { TasksContext } from '../../contexts/tasks';

export interface TaskProps {
  id: string;
  description: string;
  done: boolean;
  createdAt: string;
  userId: string;
  playAnimation: () => void;
}

export const Task = (task: TaskProps) => {
  const { tasks, setTasks } = useContext(TasksContext);

  const displayNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      vibration: true,
      importance: AndroidImportance.HIGH
    });

    await notifee.displayNotification({
      id: '1',
      title: 'Congratulations! 🎉',
      body: 'You have completed all your tasks',
      android: {channelId},
      ios: {sound: 'default'}
    });
  };

  const handleCheckTask = async (task: TaskProps) => {
    const { error } = await supabase
    .from('tasks')
    .update({ done: task.done ? false : true })
    .eq('id', task.id);
    
    if (error) return Alert.alert('Error', error.message);
    
    const newTasks = [...tasks];
    const oldTaskIndex = tasks.findIndex((item: TaskProps) => item.id === task.id);
    const taskAfterCheck = {
      description: task.description,
      done: !task.done,
      id: task.id,
      user_id: task.userId,
      created_at: task.createdAt
    }

    newTasks.splice(oldTaskIndex, 1, taskAfterCheck);
    setTasks(newTasks);

    if (newTasks.every((task: TaskProps) => task.done)) {
      displayNotification();
      task.playAnimation();
    };
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

          const { data: { user } } = await supabase.auth.getUser();

          if (error) return Alert.alert('Error', error.message);
          else {
            const { data } = await supabase
            .from('tasks')
            .select()
            .eq('user_id', user!.id)
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