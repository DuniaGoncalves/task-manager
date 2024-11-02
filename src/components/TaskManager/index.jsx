import React from 'react';
import TaskForm from '../TaskForm';
import TaskList from '../TaskList';
// import './main.css';

const TaskManager = () => {

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskManager;
