import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/Context';
import { types } from '../helpers/types';

export const NavBar = () => {
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
                    <Link className='navbar-brand' to='/'>
                        Home
                    </Link>

                    <div className='d-flex align-items-center text-info'>
                        <h4 className='me-2 m-auto'>{user.name}</h4>
                        <button
                            onClick={handleLogout}
                            className='btn btn-outline-primary text-light border'
                        >
                            Log-Out
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};
