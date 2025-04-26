import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import todoRoutes from "./routes/todo.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection failed!", error));

const app = express();
app.use(express.json()); // for passing json values to server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/todo", todoRoutes);

// middleware to handle errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error!";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
