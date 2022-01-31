import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../redux/actions/auth';

const ResetPasswordPage = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate replace to='/' />
    }

    return (
        <div className='auth'>
            <h1 className="auth__title">Request Password Reset:</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='auth__form__group'>
                    <input
                        className='auth__form__input'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button className='auth__form__button' type='submit'>Reset Password</button>
            </form>
        </div>
    );
};

export default connect(null, { reset_password })(ResetPasswordPage)
