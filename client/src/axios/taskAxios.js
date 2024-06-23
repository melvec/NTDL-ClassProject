import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

//Get a task | GET | READ
export const getTasks = () => {
  const response = axios
    .get(API_URL)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

//Create a task | POST | CREATE
export const createTask = (taskObject) => {
  //send post request to API
  const response = axios
    .post(API_URL, taskObject)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

//Update a task | PATCH | UPDATE
export const updateTask = (id, updatedFields) => {
  const response = axios
    .patch(`${API_URL}/${id}`, updatedFields)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

//Delete a task | DELETE | DELETE
export const deleteTask = (id) => {
  const response = axios
    .delete(`${API_URL}/${id}`)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

export const createReminder = (reminder) => {
  const response = axios
    .post(API_URL, reminder)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};
