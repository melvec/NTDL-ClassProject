import React from "react";
import { Badge, Button, Stack } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft, BsTrash } from "react-icons/bs";
import { updateTask, deleteTask } from "../axios/taskAxios";

export const TaskListItem = (props) => {
  const { task, fetchTasks } = props;

  const handleOnSwitch = async () => {
    //call an API to update the task

    const updatedTaskType = task.type === "entry" ? "unwanted" : "entry";
    const result = await updateTask(task._id, { type: updatedTaskType });
    //Success
    if (result.status === "success") {
      fetchTasks();
    }
  };

  const handleOnDelete = async () => {
    const result = await deleteTask(task._id);
    //Success
    if (result.status === "success") {
      fetchTasks();
    }
  };

  return (
    <Stack gap={2}>
      <strong>
        {task.name} - {task.time} hrs
      </strong>
      <Stack direction="horizontal" gap={2}>
        <Badge bg="info">{task.priority}</Badge>
        <Badge bg="info">{task.difficulty}</Badge>
      </Stack>

      <Stack direction="horizontal" gap={2}>
        <Button variant="warning" onClick={handleOnSwitch}>
          {task.type === "entry" && <BsArrowRight />}

          {task.type === "unwanted" && <BsArrowLeft />}
        </Button>
        <Button variant="danger">
          <BsTrash onClick={handleOnDelete} />
        </Button>
      </Stack>
    </Stack>
  );
};
