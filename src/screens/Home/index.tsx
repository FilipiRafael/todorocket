import { View, Text, ScrollView } from 'react-native';
import { styles } from "./styles";

import { Header } from '../../components/Header';
import { Task, TaskProps } from '../../components/Task';

import { EvilIcons } from '@expo/vector-icons';

const tasks: TaskProps[] = [
  {
    id: '1',
    name: 'Finalize new App',
    done: true
  },
  {
    id: '2',
    name: 'Create another App',
    done: false
  },
  {
    id: '3',
    name: 'Do something',
    done: false
  },
  {
    id: '5',
    name: 'Finalize new App',
    done: true
  },
  {
    id: '6',
    name: 'Create another App',
    done: false
  },
  {
    id: '7',
    name: 'Do something',
    done: false
  },
  {
    id: '8',
    name: 'Buy a new jacket',
    done: true
  },
]

export const Home = () => {
  return (
    <>
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
                {tasks.filter(task => task.done).length}
            </Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {
            tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                name={task.name}
                done={task.done}
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