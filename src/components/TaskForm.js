import React, { useState } from "react";
import { saveTask, updateTask } from "../api/taskService";

const TaskForm = ({ existingTask, reloadTasks }) => {
  const [title, setTitle] = useState(existingTask ? existingTask.titleOfTheTask : "");
  const [completed, setCompleted] = useState(existingTask ? existingTask.completedStatus : false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { titleOfTheTask: title, completedStatus: completed };

    if (existingTask) {
      await updateTask(existingTask.taskId, taskData);
    } else {
      await saveTask(taskData);
    }
    reloadTasks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
      <label>
        Completed:
        <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
      </label>
      <button type="submit">{existingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
