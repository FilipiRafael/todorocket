import { useState, useEffect, useContext, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { styles } from "./styles";

import { Header } from '../../components/Header';
import { Task } from '../../components/Task';

import { EvilIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

import { supabase } from '../../services/supabase';
import { TasksContext } from '../../contexts/tasks';

interface TaskProps {
  id: string;
  description: string;
  done: boolean;
}

export const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAnimation, setIsAnimation] = useState<boolean>(false);
  const { tasks, setTasks } = useContext(TasksContext);

  const animation = useRef<any>();

  const playAnimation = () => {
    setIsAnimation(true);
    animation.current.play();
    setTimeout(() => {
      setIsAnimation(false);
      animation.current.reset();
    }, 3000);
  }

  useEffect(() => {
    const getTasks = async () => {
      setIsLoading(true);

      const { data: { user } } = await supabase.auth.getUser();
      const { data, error } = await supabase
      .from('tasks')
      .select()
      .eq('user_id', user!.id)
      .order('created_at', { ascending: true });

      if (error) Alert.alert('Error', error.message);
      else {
        setIsLoading(false);
        setTasks(data);
      }
    }

    getTasks();
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.activityContainer]}>
        <ActivityIndicator />
      </View>
    ) 
  }

  return (
    <>
      <LottieView
        source={require('../../assets/congrats.json')}
        style={[isAnimation ? styles.animation : { display: 'none' }]}
        ref={animation}
        progress={1}
        speed={1}
      />
      <Header />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.wrapperCount}>
            <Text style={styles.createdTasks}>
              Created 
            </Text>
            <Text style={styles.createdTasksCount}>
                {tasks.length}
              </Text>
          </View>
          <View style={styles.wrapperCount}>
            <Text style={styles.doneTasks}>
              Done 
            </Text>
            <Text style={styles.createdTasksCount}>
                {tasks.filter((task: TaskProps) => task.done).length}
            </Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {
            tasks.map((task: TaskProps) => (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                done={task.done}
                playAnimation={playAnimation}
              />
            ))
          }
          {
            tasks.length === 0 && (
              <View style={styles.emptyTasksContainer}>
                <EvilIcons
                  name='check'
                  size={100}
                  color='#808080'
                />
                <Text style={styles.emptyTasksText}>
                  You don't have any tasks registered yet.
                </Text>
              </View>
            )
          }
        </ScrollView>
      </View>
    </>
  )
}