const Todo = require("../models/todo");

const getTodos = async(req, res) => {
    const todos = await Todo.find({ user: req.user.id })
    res.send({ count: todos.length, todos: todos }).status(200)
}

const createTodo = async(req, res) => {
    const { title, status, start_date } = req.body

    if(!title || !status || !start_date) return res.status(400).send({ error: "Please provide all required fields" })

    try {
        const newTodo = new Todo({
            user: req.user.id,
            title: title,
            status: status,
            start_date: start_date
        })
        await newTodo.save()

        if(!newTodo) return res.status(400).send({ error: "New todo item could not be created!!" })
        res.send(newTodo).status(201)

    } catch (error) {
        console.log({ error: error.message });
        return res.status(400).send({ error: error.message })
    }
}

const getTodoById = async(req, res) => {
    const { id } = req.params

    try {
        const todo = await Todo.findById({ "_id": id })
        if(!todo) return res.status(404).send({ error: `Todo with id: ${id} not found!!` })
        res.send(todo).status(200)
    } catch (error) {
        console.log({ error: error.message });
        return res.status(400).send({ error: error.message })
    }
}

module.exports = {
    getTodos,
    createTodo,
    getTodoById
}