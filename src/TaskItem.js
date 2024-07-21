import React from 'react';

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li>
      <span className={task.completed ? 'completed' : ''}>
        {task.text}
      </span>
      <button onClick={() => onToggle(task.id)}>Complete</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
