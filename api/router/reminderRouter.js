import express from "express";
import { createReminder } from "../model/ReminderModel.js";

//CRUD Routes for reminder

//Express router
const reminderRouter = express.Router();

//post
reminderRouter.post("/", (req, res) => {
  //get a task to be created from request
  const reminder = req.body;

  //Create the reminder in database
  createReminder(reminder)
    .then((createdReminder) => {
      res.json({
        status: "success",
        data: createdReminder,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "Cannot create the reminder",
      });
    });
});

export default taskRouter;
