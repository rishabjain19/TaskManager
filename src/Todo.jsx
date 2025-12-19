import React, { useState } from "react";
function Todo() {
  const [tasks, setTasks] = useState(["sample task 1", "sample task 2 "]);
  const [newTasks, setNewTasks] = useState("");

  function handleAddTask() {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  }

  function handleDeleteTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }
  // impotant functions for moving tasks up and down
  // here we swap the index using aarray destructuring
  function moveTaskUp(index) {
    if (index > 0) {
      const update = [...tasks];
      [update[index - 1], update[index]] = [update[index], update[index - 1]];
      setTasks(update);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const update = [...tasks];
      [update[index + 1], update[index]] = [update[index], update[index + 1]];
      setTasks(update);
    }
  }

  return (
    <div className="todo">
      <h1> Todo List </h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTasks}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <ol>
        {tasks.map((elemnts, index) => {
          return (
            <li key={index}>
              <span className="text"> {elemnts}</span>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTask(index)}
              >
                {" "}
                delete{" "}
              </button>
              <button className="up-btn" onClick={() => moveTaskUp(index)}>
                {" "}
                👆
              </button>
              <button className="down-btn" onClick={() => moveTaskDown(index)}>
                {" "}
                👇
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
export default Todo;
