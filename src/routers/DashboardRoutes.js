import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { CountriesContinent } from '../components/CountriesContinent';
import { Dos } from '../components/Dos';
import { NavBar } from '../components/NavBar';

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />

            <div className='container'>
                <Switch>
                    <Route
                        exact
                        path='/continents'
                        component={CountriesContinent}
                    />
                    <Route exact path='/segundo' component={Dos} />

                    <Redirect to='/continents' />
                </Switch>
            </div>
        </>
    );
};
