// api/model/ReminderModel.js
import mongoose from "mongoose";

const ReminderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  repeat: {
    type: String,
    enum: ["none", "daily", "weekly", "monthly", "yearly", "custom"],
    default: "none",
  },
  notificationMethod: {
    type: String,
    enum: ["push", "email", "sms"],
    default: "push",
  },
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task",
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  status: {
    type: String,
    enum: ["active", "snoozed", "dismissed"],
    default: "active",
  },
  notes: {
    type: String,
  },
  sound: {
    type: String,
  },
  snoozeDuration: {
    type: Number, // Duration in minutes
    default: 10,
  },
});

const Reminder = mongoose.model("Reminder", ReminderSchema);

export default Reminder;
