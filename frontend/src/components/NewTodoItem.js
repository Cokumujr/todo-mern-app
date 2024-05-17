import React, { useState } from 'react'

const NewTodoItem = () => {
  const [title, setTitle] = useState(null);
  const [status, setStatus] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const BASE_URL = "http://localhost:5000/api"
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0NzA1NzJiNDA2ZGY5MTQwZTczMTVkIiwidXNlcm5hbWUiOiJwYXVsbmRhbWJvIiwiZW1haWwiOiJwYXVsbmRhbWJvQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJQYXVsIiwibGFzdF9uYW1lIjoiTmRhbWJvIn0sImlhdCI6MTcxNTkzMDUyNSwiZXhwIjoxNzE1OTY2NTI1fQ.6ReW8VHxVDnruQnI1XckJm3--uwCgRo597VUs850eR0"


  const handleSubmit = (e) => {
    e.preventDefault();

    const todoItem = {
      title: title,
      status: status,
      start_date: startDate
    }

    console.log(todoItem)

    const createTodoItem = async() => {
      const todo = await fetch(`${BASE_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${token}`
        },
        body: JSON.stringify(todoItem)
      })
    
      console.log(todo)
      if(todo.ok) {
        window.location.reload()
      } else {
        alert("Something went wrong!!")
      }
    }

    createTodoItem()

  }

  return (
    <div className='col-4'>
      <form onSubmit={handleSubmit}>
        <div className='mb-2'>
          <label className='form-label'>Title</label>
          <input type='text' className='form-control' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label className='form-label'>Status</label>
          <select className='form-select' onChange={(e) => setStatus(e.target.value)}>
            <option value=""></option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className='mb-2'>
          <label className='form-label'>Start Date</label>
          <input type='date' className='form-control' onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className='text-center'>
          <button type="submit" className='btn btn-success'>Submit Data</button>
        </div>
      </form>
    </div>
  )
}

export default NewTodoItem