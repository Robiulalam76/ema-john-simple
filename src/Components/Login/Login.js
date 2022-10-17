import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContexts/UserContext';
import './Login.css'



const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/shop'
    const { logInWithEmail } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value

        logInWithEmail(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <div className='form-container'>
            <div className='form-title'>
                <h1>Login</h1>
            </div>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className='form-control'>
                    <button type="submit">Login</button>
                </div>
            </form>
            <div>
                <span>New to Ema-john? <Link to='/signup' className='new-account-text'>Create New Account</Link></span>
            </div>
            <div className='or-title'>
                <div></div><small>or</small><div></div>
            </div>
            <div className='login-google'>
                <button>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;