import React, { useState } from 'react';
import { SignInStyled } from './Auth.styled.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User login details:", { email, password });

        // Simulate login success and redirect to home page
        navigate('/');
    };

    return (
        <SignInStyled>
            <div className='login'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className='input'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='@gmail.com'
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='input'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='password'
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </SignInStyled>
    );
};

export default Login;
