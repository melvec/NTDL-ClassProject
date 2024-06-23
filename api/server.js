import express from "express";
import { connectMongo } from "./config/dbConfig.js";
import taskRouter from "./router/taskRouter.js";
//import reminderRouter from "./router/taskRouter.js";
import cors from "cors";
import "dotenv/config";

//Initialise express app
const app = express();
const PORT = process.env.PORT || 8000;

//Define cors options
const corsOptions = {
  credentials: true,
  origin: true,
};

//JSON parser middleware
app.use(express.json());

//CORS middleware
app.use(cors(corsOptions));

//Connect to MongoDB | database

connectMongo();

//ROUTES - receive client requests
//Task routes

app.use("/api/tasks", taskRouter);
//app.use("/api/reminders", reminderRouter);

//Start server
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log("server running at http://localhost:" + PORT);
});
