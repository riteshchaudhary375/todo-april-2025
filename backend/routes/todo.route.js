import express from "express";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
  getTodo,
  searchTodo,
  testAPI,
  toggleTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/test", testAPI);
router.post("/create-todo", createTodo);
router.get("/get-all-todos", getAllTodos);
router.get("/get-todo/:todoId", getTodo);
router.put("/edit-todo/:todoId", editTodo);
router.delete("/delete-todo/:todoId", deleteTodo);
router.get("/search-todo", searchTodo);
router.put("/toggleTodo/:todoId", toggleTodo);

export default router;
