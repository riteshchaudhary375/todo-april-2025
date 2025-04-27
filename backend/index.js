import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import todoRoutes from "./routes/todo.route.js";

// 1
import path from "path";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection failed!", error);
  });

// 2. project path dir
const __dirname = path.resolve();

const app = express();
app.use(express.json()); // for passing json values to server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/todo", todoRoutes);

// 3. static path of file
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// 4. find the path for index.html from frontend. dist is build by root build command
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

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
