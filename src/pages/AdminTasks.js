import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('/api/tasks');
        setTasks(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    try {
      const res = await axios.post('/api/tasks', { description, points });
      alert(res.data.msg);
      setTasks([...tasks, { description, points, completed: false }]);
      setDescription('');
      setPoints('');
    } catch (err) {
      console.error(err);
      alert('Error adding task');
    }
  };
  

  return (
    <div>
      <h1>Admin - Manage Tasks</h1>
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Points"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <div>{task.description}</div>
            <div>Points: {task.points}</div>
            <div>Status: {task.completed ? 'Completed' : 'Pending'}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminTasks;
