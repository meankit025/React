import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const initialData = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, setTasks] = useState(initialData);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const inputHandler = (e) => {
    setTitle(e.target.value);
  };

  const textHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        title,
        description,
      },
    ]);
    setTitle("");
    setDescription("");
  };

  const deleteTaskHandler = (index) => {
    const filteredArray = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(filteredArray);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Title" onChange={inputHandler} />
        <textarea placeholder="Description" onChange={textHandler}></textarea>
        <button type="submit">Add</button>
      </form>

      {tasks.length === 0 ? (
        <h1 style={{ color: "unset" }}>No tasks found</h1>
      ) : (
        tasks.map((task, index) => (
          <Task
            key={index}
            title={task.title}
            description={task.description}
            deleteTask={deleteTaskHandler}
            index={index}
          />
        ))
      )}
    </div>
  );
};

export default Home;
