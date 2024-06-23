import TaskSchema from "../schema/taskSchema.js";

//for making queries

//FETCH | READ the task
export const getTasks = () => {
  return TaskSchema.find();
};

//Create a task, will create a new record in the DB
export const createTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

//Update task in DB
export const updateTask = (id, updatedField) => {
  return TaskSchema.findByIdAndUpdate(id, updatedField, { new: true });
};

//Delete task in DB

export const deleteTask = (id) => {
  return TaskSchema.findByIdAndDelete(id);
};
