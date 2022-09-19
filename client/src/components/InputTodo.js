import React, { useState }from 'react';
import EditTodo from './EditTodo';
const InputTodo = () => {
    const [description, setDescription] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch('http://localhost:5000/todos', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = '/';
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <div className='InputTodo'>
            <h1 className='text-center mt-5'>Pern Todo List</h1>
            <form className='d-flex mt-5' onSubmit={handleSubmit} >
                <input type='text' placeholder='Enter Todo' onChange={(e) => setDescription(e.target.value)}value={description} className='form-control'/>
                <button className='btn btn-success'>Add</button>
            </form>
        </div>
    );
}

export default InputTodo;