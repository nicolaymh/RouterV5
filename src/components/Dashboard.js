import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/Context';
import { types } from '../helpers/types';

export const Dashboard = () => {
    const { user, dispatch } = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = () => {
        history.replace('/dashboard');

        dispatch({
            type: types.logout,
        });
    };

    return (
        <div className='container'>
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container'>
                    <Link className='navbar-brand' to='/dashboard'>
                        App
                    </Link>
                    <button
                        onClick={handleLogout}
                        className='btn btn-outline-primary text-light border'
                    >
                        Log-Out
                    </button>
                </div>
            </nav>
        </div>
    );
};
