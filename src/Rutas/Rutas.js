import React from 'react';
import { Route, Switch } from 'react-router';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { Error404 } from '../components/Error404';
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
            <Route path='*'>
                <Error404 />
            </Route>
        </Switch>
    );
};
