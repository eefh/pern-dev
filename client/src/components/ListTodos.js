import React, { useEffect, useState} from 'react';
import EditTodo from './EditTodo';
const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            
            setTodos(jsonData);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getTodos();
    }, []);
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className='ListTodos'>
            <table className='table mt-5 text-center'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/*                    
                    <tr>
                        <td></td>
                    </tr>
                    */}
                    {todos.map((e) => {
                        return (<tr key={e.todo_id}>
                            <td>{e.description}</td>
                            <td><EditTodo/></td>
                            <td>
                                <button onClick={() => deleteTodo(e.todo_id)}className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ListTodos;