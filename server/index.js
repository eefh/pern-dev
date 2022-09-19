import express from 'express';
const app = express();
import cors from 'cors';
import pool from './db.js';

//middleware
app.use(cors());
app.use(express.json());

//routes

//create todo
app.post('/todos', async(req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows);
    } catch (error) {
        res.send(error.message);
    }
});
//get all todos
app.get('/todos', async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        res.send(error.message);
    }
});
//get one todo
app.get('/todos/:id', async(req, res) => {
    try {
        const Todo = await pool.query(`SELECT * FROM todo WHERE todo_id = $1`, [req.params.id]);
        res.json(Todo.rows[0]);
    } catch (error) {
        res.send(error.message);
    }
});

app.put('/todos/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json("Todo updated.");
    } catch (error) {
        console.log(error.message);
    }
});
//delete todo
app.delete('/todos/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo deleted.");
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(5000, () => {
    console.log(`server started on port 5000`);
});