import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div>
      <h1>TODO List App</h1>
      <TaskForm reloadTasks={() => window.location.reload()} />
      <TaskList />
    </div>
  );
};

export default App;
