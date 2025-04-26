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
