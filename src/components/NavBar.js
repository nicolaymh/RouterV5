import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/Context';
import { types } from '../helpers/types';

export const NavBar = () => {
    const { user, dispatch } = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = () => {
        history.replace('/');

        dispatch({
            type: types.logout,
        });
    };

    return (
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <div className='container'>
                <div className='navbar-nav'>
                    <Link className='navbar-brand m-auto p-2' to='/segundo'>
                        Home
                    </Link>
                    <NavLink
                        activeClassName='text-info fs-5'
                        className='nav-item nav-link m-auto px-2'
                        exact
                        to='/continents'
                    >
                        Continents
                    </NavLink>

                    <NavLink
                        activeClassName='text-info fs-5'
                        className='nav-item nav-link m-auto px-2'
                        exact
                        to='/segundo'
                    >
                        Segundo
                    </NavLink>
                </div>

                <div className='d-flex align-items-center text-info'>
                    <h6 className='me-2 m-auto'>{user.name}</h6>
                    <button
                        onClick={handleLogout}
                        className='btn btn-outline-primary text-light border'
                    >
                        Log-Out
                    </button>
                </div>
            </div>
        </nav>
    );
};
