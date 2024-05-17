const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Authentication Middleware
const { verifyToken } = require("./middleware/Authenticate");
// database configuration
const { connect_database } = require("./db/connect_db");
connect_database();


// Routes Imports
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo");
const itemRoutes = require("./routes/shopping_list");

app.get("/", (req, res) => {
    res.send({ message: "The server is running!!" }).status(200)
});

app.use("/api/auth", authRoutes);
app.use("/api/todos", verifyToken, todoRoutes);
app.use("/api/shopping-list", verifyToken, itemRoutes);


app.listen(PORT, () => {
    console.log(`The server is running on: http://localhost:${PORT}`);
})