import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../utils/configs';
//import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode"
import Cookies from "js-cookie"

import Register from './Register';

const Login = ({ showLoginForm, setShowLoginForm }) => {
    //const navigateTo = useNavigate();
    const fiveSeconds = 5 * 1000; // convert seconds to milliseconds
    const expiresDate = new Date(Date.now() + fiveSeconds);

    const [formData, setFormData] = useState({
        email:"",
        password:""
    });

    const {email, password} = formData;

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                headers:{
                    'Content-type':'application/json',
                },
                method:"POST",
                body:JSON.stringify(formData)
            });
            if(res.ok){
                const data = await res.json();
                console.log(data.token);
                
                const user = await jwtDecode(data.token)
                console.log(user)
                localStorage.setItem("user", JSON.stringify(user));
                sessionStorage.setItem("user", JSON.stringify(user));

                Cookies.set("token", data.token, { expires: 1 })

                //navigateTo("/");
                window.location.reload();
            } else{
                alert("Couldn't Login at this time :(");
            }
            
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    
                <div className='col-4'>
                <h4 className='text-center'>Login</h4>
                <hr/>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className='text-center'>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <br/>
                <p>No account yet? <a href='#' onClick={() => setShowLoginForm(false)}>Register</a></p>
            </form>
            </div>
  )
}

export default Login