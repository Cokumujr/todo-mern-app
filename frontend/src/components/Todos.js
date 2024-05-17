import React from 'react';
import TodosList from './TodosList';
import NewTodoItem from './NewTodoItem';

const Todos = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <h4 className='text-center'>Todo List</h4>
        <hr/>
      </div>
        <div className='row'>
            <NewTodoItem />        
            <TodosList />
        </div>
    </div>
  )
}

export default Todos