import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/Context';
import { types } from '../helpers/types';

const Login = () => {
    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch({
            type: types.login,
        });
    };

    return (
        <form
            onSubmit={handleLogin}
            className='container d-flex justify-content-center align-items-center mt-5'
        >
            <div className='me-2'>
                <input type='text' className='form-control' />
            </div>
            <div>
                <button type='submit' className='btn btn-primary'>
                    Login
                </button>
            </div>
        </form>
    );
};

export default Login;
