import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Login.css'

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        event.preventDefault();

        try{
            const response = await axios.post("http://localhost:8081/api/v1/auth/login", {
                email,
                password,
            });

            if(response.status === 200){
                const {token, user} = response.data;
                console.log("token : ", token, " user ", user);
                await requestUserInfo(token, user);
            }
        }catch(error){
            setError('login failed');
            console.error("Login Failed : ", error);
        }

        navigate('/blog')
    }

    const requestUserInfo = async (token, user) => {
        try{
            const UserInfo = await axios.get(`http://localhost:8080/api/v1/user/${user.id}`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            })

            console.log("Fatch User Info Successfully! : ", UserInfo.data);
        }catch(error){
            console.error('Failed to Fatch User Info : ', error);
        }
    };
  return (
    <div className='login-container'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input 
                    type="email"
                    placeholder='Email'
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type='submit'>Login</button>
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}
