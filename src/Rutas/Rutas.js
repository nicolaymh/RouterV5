import React from 'react';
import { Route, Switch } from 'react-router';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { Home } from '../components/Home';

export const Rutas = () => {
    return (
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
    );
};
