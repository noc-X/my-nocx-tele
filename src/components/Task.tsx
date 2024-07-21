import React, { useState, useEffect } from 'react';

interface Task {
  _id: string;
  description: string;
  points: number;
  completed: boolean;
}

const Task: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Fetch task data from API
    setTasks([
      { _id: '1', description: 'Task 1', points: 10, completed: false },
      { _id: '2', description: 'Task 2', points: 20, completed: true },
    ]);
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
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

export default Task;
