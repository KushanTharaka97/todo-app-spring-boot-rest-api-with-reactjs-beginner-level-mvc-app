// import React, { useState } from "react";
// import { saveTask, updateTask } from "../api/taskService";

// const TaskForm = ({ existingTask, reloadTasks }) => {
//   const [title, setTitle] = useState(existingTask ? existingTask.titleOfTheTask : "");
//   const [completed, setCompleted] = useState(existingTask ? existingTask.completedStatus : false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const taskData = { titleOfTheTask: title, completedStatus: completed };

//     if (existingTask) {
//       await updateTask(existingTask.taskId, taskData);
//     } else {
//       await saveTask(taskData);
//     }
//     reloadTasks();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
//       <button type="submit">{existingTask ? "Update Task" : "Add Task"}</button>
//       <br/>
//       <label>
//         Completed:
//         <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
//       </label>
//     </form>
//   );
// };

// export default TaskForm;

import React, { useState } from "react";
import { saveTask, updateTask } from "../api/taskService";
import { Card, Form, Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

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
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <FormLabel>Task Title</FormLabel>
            <FormControl
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task Title"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3 d-flex align-items-center">
            <FormLabel className="me-2">Completed</FormLabel>
            <Form.Check type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
          </FormGroup>
          <Button variant="primary" type="submit">
            {existingTask ? "Update Task" : "Add Task"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TaskForm;