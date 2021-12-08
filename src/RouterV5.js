import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
                        <h3>Home</h3>
                    </Route>
                    <Route exact path='/acerca'>
                        <h3>Acerca</h3>
                    </Route>
                    <Route exact path='/contacto'>
                        <h3>contacto</h3>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
