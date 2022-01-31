import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../redux/actions/auth';

const ResetPasswordConfirmPage = ({ reset_password_confirm }) => {

    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const { uid, token } = useParams();

    const onSubmit = e => {
        e.preventDefault();

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate replace to='/' />
    }

    return (
        <div className='auth'>
            <form onSubmit={e => onSubmit(e)}>
                <div className='auth__form__group'>
                        <input
                            className='auth__form__input'
                            type='password'
                            placeholder='New Password'
                            name='new_password'
                            value={new_password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                        />
                    </div>
                    <div className='auth__form__group'>
                        <input
                            className='auth__form__input'
                            type='password'
                            placeholder='Confirm New Password'
                            name='re_new_password'
                            value={re_new_password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                        />
                    </div>
                <button className='auth__form__button' type='submit'>Reset Password</button>
            </form>
        </div>
    )
}

export default connect(null, { reset_password_confirm })(ResetPasswordConfirmPage)
