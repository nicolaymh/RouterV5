import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Dashboard = () => {
    return (
        <>
            <NavBar />

            <Switch>
                <Route>
                    <h4>Hola</h4>
                </Route>
            </Switch>
        </>
    );
};
