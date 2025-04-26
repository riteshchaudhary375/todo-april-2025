import express from "express";
import { createTodo, getAllTodos, testAPI } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/test", testAPI);
router.post("/create-todo", createTodo);
router.get("/get-all-todos", getAllTodos);

export default router;
