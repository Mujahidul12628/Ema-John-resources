import React, { useState } from 'react';
import './Login.css'
import DynamicTittle from '../Hook/DynamicTitle';

const Login = () => {
    DynamicTittle('Login')
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
            <button className='LogIn' type="submit">Log In</button>
            <div className='or_login'>
                <div className='Or_login_with'>
                    Or login with
                </div>
                <button className='google' type="submit">Google</button>
                <button className='facebook' type="submit">Facebook</button>

            </div>
        </form>
    );
};

export default Login;
