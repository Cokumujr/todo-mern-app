import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TOKEN, BASE_URL } from '../services/configs';

const EditTodoItem = () => {
    const [title, setTitle] = useState(null);
    const [status, setStatus] = useState(null);
    const [startDate, setStartDate] = useState(null);

    const handleSubmit = (e) => {
        
    }

  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-4'>

            </div>
            <div className='col-4'></div>
        </div>
    </div>
  )
}

export default EditTodoItem