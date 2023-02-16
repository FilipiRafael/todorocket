import { createContext, useState } from 'react';

export const TasksContext = createContext<any>([]);

export function TasksProvider({children}: any) {
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks
      }}
    >
      {children}
    </TasksContext.Provider>
  )
};