import Todo from "../models/todo.model.js";
import { errorHandler } from "../utils/error.js";

export const testAPI = (req, res, next) => {
  try {
    // user build function error
    // next(errorHandler(400, "All fields required!"));

    res.json({ message: "API is working" });
  } catch (error) {
    next(error); // system error
  }
};

// create new todo
export const createTodo = async (req, res, next) => {
  const { title, description } = req.body;

  if (!title) {
    return next(errorHandler(400, "Title required!"));
  }

  const newTodo = new Todo({ title, description });

  try {
    const data = await newTodo.save();
    res.status(201).json({ success: true, message: "Todo created", data });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get all todos
export const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    // Get all todos and sort in desc order
    // const todos = await newTodo.find().sort({ createdAt: -1 });

    const countTodos = await Todo.countDocuments();

    res.status(200).json({ success: true, todos, countTodos });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
