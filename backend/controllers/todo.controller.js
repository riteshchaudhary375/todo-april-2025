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

//get single todo by id
export const getTodo = async (req, res, next) => {
  try {
    const todoInfo = await Todo.findById(req.params.todoId);

    res.status(200).json({ success: true, todoInfo });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// edit todo
export const editTodo = async (req, res, next) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.todoId,
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      },
      { new: true }
    );
    res
      .status(201)
      .json({ success: true, message: "Todo updated", updatedTodo });
  } catch (error) {
    next(error);
  }
};

// delete todo
export const deleteTodo = async (req, res, next) => {
  try {
    await Todo.findByIdAndDelete(req.params.todoId);

    res.status(200).json({ success: true, message: "Todo deleted" });
  } catch (error) {
    next(error);
  }
};

// search todo for testing api purpose only
export const searchTodo = async (req, res, next) => {
  try {
    // Express query = strict search
    // const todos = await Todo.find({ title: "title" });
    // const todos = await Todo.find({});
    // const todos = await Todo.find(req.query);

    const { searchTerm } = req.query;
    const queryObj = {};

    if (searchTerm) {
      // strict search
      // queryObj.title = title;

      // mongodb $regex = dynamic search
      // character search
      queryObj.searchTerm = { $regex: title, $options: "i" }; // doesnot care for upper and lower case
    }

    // console.log(queryObj);

    const todos = await Todo.find(queryObj);

    res.status(200).json({ todos });
  } catch (error) {
    next(error);
  }
};

// Toggle todo
export const toggleTodo = async (req, res, next) => {
  const id = req.params.todoId;

  try {
    const todoRef = await Todo.findById(id);

    const updatedTodo = await Todo.findByIdAndUpdate(
      // 1st option, find by params id
      /* {
        _id: req.params.todoId,
      }, */
      todoRef._id,
      // 2nd option then take action
      {
        complete: !todoRef.complete,
      },
      { new: true }
    );

    await updatedTodo.save();

    res.status(201).json({
      success: true,
      message: "Todo updated",
      updatedTodo,
    });
  } catch (error) {
    next(error);
  }
};
