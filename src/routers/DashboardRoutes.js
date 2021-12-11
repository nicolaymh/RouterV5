import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Dos } from '../components/Dos';
import { NavBar } from '../components/NavBar';
import { Uno } from '../components/Uno';

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />

            <div className='container'>
                <Switch>
                    <Route exact path='/primero' component={Uno} />
                    <Route exact path='/segundo' component={Dos} />

                    <Redirect to='/primero' />
                </Switch>
            </div>
        </>
    );
};
