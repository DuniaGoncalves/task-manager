import React, { useState} from 'react';
import TaskForm from '../TaskForm';
import TaskList from '../TaskList';
import './main.css';

const TaskManager = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
};

export default TaskManager;
