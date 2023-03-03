import { useState, useContext } from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import {
  EvilIcons,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons';
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import { TasksContext } from '../../contexts/tasks';
import { supabase } from '../../services/supabase';

export const Header = () => {
  const { setIsAuth } = useContext(AuthContext);
  const { setTasks } = useContext(TasksContext);
  const [description, setDescription] = useState<string>('');
  const { navigate } = useNavigation<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAddTask = async () => {
    setIsLoading(true);
    if (!description) return Alert.alert('New task', 'You need to fill the name field');

    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase
    .from('tasks')
    .insert({ description, user_id: user!.id });

    if (error) Alert.alert('Error', error.message);
    else {
      setIsLoading(false);
      const { data } = await supabase
      .from('tasks')
      .select()
      .eq('user_id', user!.id)
      .order('created_at', { ascending: true });

      setTasks(data);
      setDescription('');
    }
  }

  const handleLogout = () => {
    Alert.alert('Logout', 'Do you want to logout?', [
      {
        text: 'Yes',
        onPress: async () => {
          let { error } = await supabase.auth.signOut();
          if (error) Alert.alert('Error', error.message);
          else setIsAuth(false);
        }
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

      <MaterialCommunityIcons
        name='coffee-outline'
        size={26}
        color='#8257E6'
        style={styles.coffee}
        onPress={() => navigate('Support')}
      />

      <Image
        source={require('../../assets/brand.png')}
        style={styles.brand}
        resizeMode='contain'
      />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder='Add a new task'
          placeholderTextColor='#808080'
          onChangeText={setDescription}
          value={description}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddTask}
          disabled={isLoading}
        >
          <EvilIcons name='plus' size={30} color='#FFF' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}