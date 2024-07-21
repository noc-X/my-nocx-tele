import React, { useState } from 'react';

interface Task {
  _id: string;
  description: string;
  points: number;
  completed: boolean;
}

const AdminTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState('');

  const handleAddTask = () => {
    const newTask: Task = {
      _id: Math.random().toString(36).substr(2, 9), // Generate a random ID
      description,
      points: parseInt(points),
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h2>Admin Tasks</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
        placeholder="Points"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
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
