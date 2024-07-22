import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const AdminTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState('');
    const handleAddTask = () => {
        const newTask = {
            _id: Math.random().toString(36).substr(2, 9),
            description,
            points: parseInt(points),
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Admin Tasks" }), _jsx("input", { type: "text", value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Description" }), _jsx("input", { type: "text", value: points, onChange: (e) => setPoints(e.target.value), placeholder: "Points" }), _jsx("button", { onClick: handleAddTask, children: "Add Task" }), _jsx("ul", { children: tasks.map((task) => (_jsxs("li", { children: [_jsx("div", { children: task.description }), _jsxs("div", { children: ["Points: ", task.points] }), _jsxs("div", { children: ["Status: ", task.completed ? 'Completed' : 'Pending'] })] }, task._id))) })] }));
};
export default AdminTasks;
