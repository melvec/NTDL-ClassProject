import express from "express";

import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../model/TaskModel.js";

//CRUD Routes for task

//Express router
const taskRouter = express.Router();

//GET | READ the task | Fetch the task
taskRouter.get("/", (req, res) => {
  getTasks()
    .then((tasks) => {
      res.json({
        status: "success",
        data: tasks,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "Cannot list the tasks",
      });
    });
});

//post
taskRouter.post("/", (req, res) => {
  //get a task to be created from request
  const task = req.body;

  //Create the task in database
  createTask(task)
    .then((createdTask) => {
      res.json({
        status: "success",
        data: createdTask,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "Cannot create the task",
      });
    });
});

//PATCH | Update a task
taskRouter.patch("/:id", (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  //query db to udate
  updateTask(id, updatedFields)
    .then((updatedTask) => {
      res.json({
        status: "success",
        data: updatedTask,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "Cannot create the task",
      });
    });
});

taskRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  deleteTask(id)
    .then((id) => {
      res.json({
        status: "success",
        data: id,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "Cannot delete the task",
      });
    });
});

export default taskRouter;
