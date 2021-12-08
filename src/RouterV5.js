import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import { Acerca } from './components/Acerca';
import { Contacto } from './components/Contacto';
import { Home } from './components/Home';

export const RouterV5 = () => {
    return (
        <div>
            <Router>
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

                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/contacto'>
                        <Contacto />
                    </Route>
                    <Route exact path='/acerca'>
                        <Acerca />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
