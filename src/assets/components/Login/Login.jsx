import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='login-class'>Login</h2>
            <label>
                <input type="email" value={email} onChange={handleEmailChange} placeholder='Email' />
            </label>
            <label>
                <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
};

export default Login;
