import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Login.css'

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        navigate('/blog')
    }
  return (
    <div className='login-container'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                />
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
