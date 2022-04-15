import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// 1 input from firebase hooks 
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // 5
    const navigate = useNavigate();

    // 2 useCreateUserWithEmailAndPassword কে কল করে auth কে প্যারামিটার হিসেবে পাঠিয়ে Destructuring করা হচ্ছে
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)



    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    // 4
    if (user) {
        navigate('/shop')
    }


    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Your two password does't match");
            return;
        }

        if (password.length < 6) {
            setError('Password must be 6 character or longer')
            return;
        }
        setError('');

        // 3 createUserWithEmailAndPassword কে কল করে email and password ke pathiye deoya hocche
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h4 className='form-title'>Sign Up</h4>
                <form onSubmit={handleCreateUser} className='login-form'>

                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>

                    <p style={{ color: "red" }}>{error}</p>
                    {/* <p style={{ color: "red" }}>{hookError}</p> */}

                    <input className='form-submit' type="submit" value="Sign Up" />

                </form>
                <p>
                    Already have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
                <div className='or-container'>
                    <div className='border'>

                    </div>
                    <p>or</p>
                    <div className='border'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;