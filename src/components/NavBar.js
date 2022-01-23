import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/Context';
import { typesUser } from '../Types/typesUser';

import { Navbar } from 'react-bootstrap';

export const NavBar = () => {
    const { user, dispatchUser } = useContext(AuthContext);

    const handleLogout = () => {
        dispatchUser({
            type: typesUser.logout,
        });
    };

    return (
        <div className='container mb-0'>
            <Navbar
                collapseOnSelect
                expand='md'
                bg='dark'
                variant='dark'
                className='border border-4 border-info'
            >
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse>
                    <nav className='navbar-nav'>
                        <Link
                            className='navbar-brand m-auto p-2'
                            to='/continents'
                        >
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
                            to='/searchCountry'
                        >
                            Search
                        </NavLink>
                    </nav>
                </Navbar.Collapse>

                <div className='text-info d-flex justify-content-end ms-auto me-1'>
                    <h6 className='me-2 m-auto text-capitalize'>{user.name}</h6>
                    <button
                        onClick={handleLogout}
                        className='btn btn-outline-primary text-light border'
                    >
                        Log-Out
                    </button>
                </div>
            </Navbar>
        </div>
    );
};
