import React, { useState } from 'react';

function AddTaskForm({ onAdd }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Task cannot be empty!');
      return;
    }
    onAdd(text);
    setText('');
    setError('');
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Add a new task" 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTaskForm;
