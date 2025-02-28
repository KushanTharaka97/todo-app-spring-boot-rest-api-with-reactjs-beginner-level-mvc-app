import React, { useEffect, useState } from "react";
import { getAllTasks, getCompletedTasks, getUncompletedTasks, deleteTask } from "../api/taskService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadTasks();
  }, [filter]);

  const loadTasks = async () => {
    let response;
    if (filter === "completed") response = await getCompletedTasks();
    else if (filter === "uncompleted") response = await getUncompletedTasks();
    else response = await getAllTasks();
    setTasks(response.data);
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    loadTasks();
  };

  return (
    <div>
      <h2>TODO List</h2>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <ul>
        {tasks.map((task) => (
          <li key={task.taskId}>
            {task.titleOfTheTask} - {task.completedStatus ? "Completed" : "Pending"}
            <button onClick={() => handleDelete(task.taskId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
