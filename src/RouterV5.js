import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
                            <Link className='navbar-brand' to='/'>
                                Home
                            </Link>
                            <Link className='navbar-brand' to='/acerca'>
                                Acerca
                            </Link>
                            <Link
                                className='navbar-brand me-auto'
                                to='/contacto'
                            >
                                Contacto
                            </Link>
                        </div>
                    </nav>
                </div>

                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/acerca'>
                        <Acerca />
                    </Route>
                    <Route exact path='/contacto'>
                        <Contacto />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
