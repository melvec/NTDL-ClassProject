import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { createTask } from "../axios/taskAxios";

const initialFormData = {
  name: "",
  time: 1,
  difficulty: "easy",
  priority: "low",
};
export const AddTaskForm = (props) => {
  const [formData, setFormData] = useState(initialFormData);
  const { name, time, difficulty, priority } = formData;
  const { fetchTasks } = props;
  //handle onchange
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // add task function - > call an API to create task to a database

    const result = await createTask(formData);
    fetchTasks();
    console.log(result);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          {/* Task Name */}
          <Form.Group>
            <Form.Label>Taks name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter the task name"
              value={name}
              onChange={handleOnChange}
              required
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col>
          {/* Task Time */}
          <Form.Group>
            <Form.Label>Time taken</Form.Label>
            <Form.Control
              type="number"
              name="time"
              placeholder="Enter the time taken"
              min={1}
              max={24}
              value={time}
              onChange={handleOnChange}
              required
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Difficulty</Form.Label>

          <Form.Select
            name="difficulty"
            value={difficulty}
            onChange={handleOnChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>Priority</Form.Label>

          <Form.Select
            name="priority"
            value={priority}
            onChange={handleOnChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Form.Select>
        </Col>
      </Row>
      <Button variant="primary" type="submit" className="d-block mx-auto my-4">
        Add Task
      </Button>
    </Form>
  );
};
