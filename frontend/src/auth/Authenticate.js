import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Authenticate = () => {
    const [showLoginForm, setShowLoginForm] = useState(true)
  return (
    <div className='container mt-2'>
        <div className='row'>
            <div className='col-4'></div>
            {showLoginForm ? (
                <Login showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
            ) : (
                <Register showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
            )}
            <div className='col-4'></div>
        </div>
    </div>
  )
}

export default Authenticate