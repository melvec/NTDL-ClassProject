import React, { useEffect, useState } from "react";
import { Col, Row, ListGroup, Alert } from "react-bootstrap";
import { getTasks } from "../axios/taskAxios";
import { AddTaskForm } from "./AddTaskForm";
import { TaskListItem } from "./TaskListItem";

export const TaskContainer = () => {
  const [taskList, setTaskList] = useState([]);

  const fetchTasks = async () => {
    const result = await getTasks();
    if (result.status === "success") {
      setTaskList(result.data);
    }
  };

  //Fetch data / task from database
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <AddTaskForm fetchTasks={fetchTasks} />
      <Row>
        <Col>
          <Alert>Tasks</Alert>

          {/* All tasks */}
          <ListGroup>
            {taskList.map((task) => (
              <ListGroup.Item
                key={task._id}
                className="d-flex justify-content-between align-items-center"
              >
                <TaskListItem task={task} fetchTasks={fetchTasks} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <Alert>Unwanted tasks</Alert>
          <ListGroup>
            {taskList.map((task) => (
              <ListGroup.Item
                key={task._id}
                className="d-flex justify-content-between align-items-center"
              >
                <TaskListItem task={task} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};
