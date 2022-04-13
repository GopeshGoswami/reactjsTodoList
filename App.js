import React, { useState } from "react";
import "./App.css";
import Task from "./Components/Task";

function App() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, { task: taskName, time: time }]);
    setTaskName("");
    setTime("");
  };

  return (
    <div className="App">
      <h1 id="heading">Todo List</h1>
      <label>Task Name:</label>
      <input
        type="text"
        id="task"
        size={25}
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />
      <label>Time:</label>
      <input
        type="text"
        name=""
        id="time"
        size={25}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <button onClick={addTask}>Add</button>
      <div className="list">
        {taskList.map((task) => {
          return <Task taskName={task.task} time={task.time} />;
        })}
      </div>
    </div>
  );
}

export default App;
