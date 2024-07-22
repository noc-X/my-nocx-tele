"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AdminTasks = () => {
    const [tasks, setTasks] = (0, react_1.useState)([]);
    const [description, setDescription] = (0, react_1.useState)('');
    const [points, setPoints] = (0, react_1.useState)('');
    const handleAddTask = () => {
        const newTask = {
            _id: Math.random().toString(36).substr(2, 9), // Generate a random ID
            description,
            points: parseInt(points),
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Admin Tasks" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Description" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: points, onChange: (e) => setPoints(e.target.value), placeholder: "Points" }), (0, jsx_runtime_1.jsx)("button", { onClick: handleAddTask, children: "Add Task" }), (0, jsx_runtime_1.jsx)("ul", { children: tasks.map((task) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("div", { children: task.description }), (0, jsx_runtime_1.jsxs)("div", { children: ["Points: ", task.points] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Status: ", task.completed ? 'Completed' : 'Pending'] })] }, task._id))) })] }));
};
exports.default = AdminTasks;
