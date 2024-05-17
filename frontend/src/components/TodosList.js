import React, { useState, useEffect } from 'react'

const TodosList = () => {
    const [todos, setTodos] = useState([]);

    const BASE_URL = "http://localhost:5000/api"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0NzA1NzJiNDA2ZGY5MTQwZTczMTVkIiwidXNlcm5hbWUiOiJwYXVsbmRhbWJvIiwiZW1haWwiOiJwYXVsbmRhbWJvQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJQYXVsIiwibGFzdF9uYW1lIjoiTmRhbWJvIn0sImlhdCI6MTcxNTkzMDUyNSwiZXhwIjoxNzE1OTY2NTI1fQ.6ReW8VHxVDnruQnI1XckJm3--uwCgRo597VUs850eR0"

    useEffect(() => {
        const getTodos = async() => {
            const response = await fetch(`${BASE_URL}/todos`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
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
                <th>ID</th>
                <th>Title</th>
                <th>Start Date</th>
                <th>Status</th>
                <th></th>
            </thead>
            <tbody>
                {todos.map((todo, index) => {
                    return  <tr key={todo._id}>
                        <td>{index + 1}</td>
                        <td>{todo.title}</td>
                        <td>{todo.start_date}</td>
                        <td>{todo.status}</td>
                        <td>
                            <a href='#' className='btn btn-info btn-sm'><i className="bi bi-eye"></i></a>
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