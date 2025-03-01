// import React, { useEffect, useState } from "react";
// import { getAllTasks, getCompletedTasks, getUncompletedTasks, deleteTask } from "../api/taskService";

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("all");

//   useEffect(() => {
//     console.log("Loding the Tasks.")
//     loadTasks();
//   }, [filter]);

//   const loadTasks = async () => {
//     let response;
//     if (filter === "completed") response = await getCompletedTasks();
//     else if (filter === "uncompleted") response = await getUncompletedTasks();
//     else response = await getAllTasks();
//     console.log("data: ", response.data)
//     setTasks(response.data);
//   };

//   const handleDelete = async (taskId) => {
//     await deleteTask(taskId);
//     loadTasks();
//   };

//   return (
//     <div>
//       <h2>TODO List</h2>
//       <select onChange={(e) => setFilter(e.target.value)} value={filter}>
//         <option value="all">All</option>
//         <option value="completed">Completed</option>
//         <option value="uncompleted">Uncompleted</option>
//       </select>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.taskId}>
//             {task.titleOfTheTask} - {task.completedStatus ? "Completed" : "Pending"}

//             <button onClick={() => handleDelete(task.taskId)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;


import React, { useEffect, useState } from "react";
import { getAllTasks, getCompletedTasks, getUncompletedTasks, deleteTask } from "../api/taskService";
import { Card, ListGroup, Button, FormSelect, Container, Row, Col } from 'react-bootstrap';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    console.log("Loading the Tasks.");
    loadTasks();
  }, [filter]);

  const loadTasks = async () => {
    let response;
    if (filter === "completed") response = await getCompletedTasks();
    else if (filter === "uncompleted") response = await getUncompletedTasks();
    else response = await getAllTasks();
    console.log("data: ", response.data);
    setTasks(response.data);
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    loadTasks();
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>TODO List</Card.Title>
              <FormSelect onChange={(e) => setFilter(e.target.value)} value={filter} className="mb-3">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </FormSelect>
              <ListGroup>
                {tasks.map((task) => (
                  <ListGroup.Item key={task.taskId} className="d-flex justify-content-between align-items-center">
                    <span>{task.titleOfTheTask} - {task.completedStatus ? "Completed" : "Pending"}</span>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(task.taskId)}>Delete</Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskList;