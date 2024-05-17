const express = require("express");

const { getTodos, getTodoById, createTodo } = require("../controllers/todo")

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.get("/:id", getTodoById);


module.exports = router