import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { CountriesContinent } from '../components/CountriesContinent';
import { Country } from '../components/Country';
import { SearchCountry } from '../components/SearchCountry';
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

                    <Route path='/country/:zone/:country' component={Country} />

                    <Route
                        exact
                        path='/searchCountry'
                        component={SearchCountry}
                    />

                    <Redirect to='/continents' />
                </Switch>
            </div>
        </>
    );
};


