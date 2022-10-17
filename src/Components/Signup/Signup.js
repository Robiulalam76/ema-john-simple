import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContexts/UserContext';
import './Signup.css'

const Signup = () => {
    const { signUpWithEmail } = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState('')

    const handleError = (event) => {
        const password = event.target.value

        // validate password
        if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least 1 uppercase');
            return;
        }
        if (password.length < 6) {
            setPasswordError('Please should be at least 6 characters.');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please add at least one special character');
            return
        }
        if (password) {
            setPasswordError('')
        }
        else {
            setPasswordError('Your Password Secure')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value

        if (confirmPassword !== password) {
            setPasswordError('Your Password Did Not Match')
            return;
        }

        signUpWithEmail(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })
    }


    return (
        <div className='form-container'>
            <div className='form-title'>
                <h1>SignUp</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">password</label>
                    <input onChange={handleError} type="password" name="password" id="password" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" required />
                </div>
                <span>
                    {
                        passwordError && <p className={` ${passwordError === 'Your Password Secure' ? 'password-secure' : 'error-password'}`}>{passwordError}</p>
                    }
                </span>
                <div className='form-control'>
                    <button type="submit">SignUp</button>
                </div>
            </form>
            <div>
                <span>You Have Already Account? <Link to='/login' className='new-account-text'>Login</Link></span>
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

export default Signup;