import React from 'react';

const Login = () => {
    return (
        <form className='container d-flex justify-content-center align-items-center mt-5'>
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
