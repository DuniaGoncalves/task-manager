import React from 'react';
import './main.css'

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks available</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-card ${task.completed ? 'completed' : ''}`}
            >
              <span className="task-text" onClick={() => toggleComplete(task.id)}>
                {task.text}
              </span>
              <div className="task-actions">
                <button onClick={() => toggleComplete(task.id)} className="complete-btn">
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(task.id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
