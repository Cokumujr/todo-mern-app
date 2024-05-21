import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../services/configs';
import Cookies from 'js-cookie';

const TodosList = () => {
    const TOKEN = Cookies.get("token")

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getTodos = async() => {
            const response = await fetch(`${BASE_URL}/todos`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${TOKEN}`
                }
            })
            const data = await response.json()
            console.log(data)
            setTodos(data.todos)
        }
        getTodos();
    }, []);

  return (
    <div className='col-8'>
        <table className='table table-striped table-sm table-responsive'>
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Start Date</th>
                <th>Status</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => {
                    return  <tr key={todo._id}>
                        <td>{index + 1}</td>
                        <td>{todo.title}</td>
                        <td>{todo.start_date}</td>
                        <td>{todo.status}</td>
                        <td>
                            <a href={`/todos/${todo._id}`} className='btn btn-info btn-sm'><i className="bi bi-eye"></i></a>
                        </td>
                        <td>
                            <a href='#' className='btn btn-primary btn-sm'><i className="bi bi-pencil-square"></i></a>
                        </td>
                        <td>
                            <a href='#' className='btn btn-danger btn-sm'><i className="bi bi-trash"></i></a>
                        </td>
                </tr>
                })}

            </tbody>
        </table>
    </div>
  )
}

export default TodosList