import React from 'react';
import { NavLink } from 'react-router-dom';

export const Links = () => {
    return (
        <div className='container'>
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <NavLink
                        activeClassName='text-info'
                        className='navbar-brand'
                        exact
                        to='/'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        activeClassName='text-info'
                        className='navbar-brand'
                        exact
                        to='/contacto'
                    >
                        Contacto
                    </NavLink>
                    <NavLink
                        activeClassName='text-info'
                        className='navbar-brand  me-auto'
                        exact
                        to='/acerca'
                    >
                        Acerca
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};
