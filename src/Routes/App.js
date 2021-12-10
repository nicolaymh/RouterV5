import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Loguea } from '../components/Loguea';
import { Logueado } from '../components/Logueado';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
    const [estado, setEstado] = useState(false);

    return (
        <Router>
            <Link to='/loguea'>
                <h3>Loguea</h3>
            </Link>
            <Link to='/on'>
                <h3>Logueado</h3>
            </Link>

            <Switch>
                <Route exact path='/loguea' component={Loguea} />
                <PrivateRoute
                    exact
                    path='/on'
                    component={Logueado}
                    estado={estado}
                />
            </Switch>
        </Router>
    );
};
