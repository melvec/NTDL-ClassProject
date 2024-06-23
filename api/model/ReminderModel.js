import ReminderSchema from "../schema/reminderSchema.js";

//for making queries

//Create a task, will create a new record in the DB
export const createReminder = (reminder) => {
  return ReminderSchema(reminder).save();
};
