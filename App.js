



// =========================
// src/App.js
// =========================
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./taskSlice";

function App() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.tasks);

  const handleAddTask = () => {
    if (task.trim() === "") {
      return;
    }

    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Redux Toolkit Task App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <button onClick={handleAddTask} style={{ padding: "10px" }}>
        Add Task
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;