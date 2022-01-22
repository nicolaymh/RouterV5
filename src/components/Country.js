import React, { useContext } from 'react';
import { useParams, Redirect } from 'react-router';
import { AuthContext } from '../context/Context';
import { ShowCountry } from './ShowCountry';

export const Country = ({ history }) => {
    const { continents } = useContext(AuthContext);

    const params = useParams({ history });
    const { zone, country } = params;

    const countryArray = continents.data
        .filter((e) => e.continent === zone)[0]
        ?.countries.filter((e) => e.name.common === country);

    if (!countryArray) return <Redirect to='/' />;

    const handleReturn = () => {
        history.goBack();
    };

    const {
        capital,
        area,
        continents: continent,
        currencies,
        flags,
        languages,
        maps,
        name,
        population,
    } = countryArray[0];

    const info = {
        capital,
        area,
        continents: continent,
        currencies,
        flags,
        languages,
        maps,
        name,
        population,
    };

    return (
        <div className='card mb-3 mt-2 bg-dark'>
            <div className='row g-0'>
                <ShowCountry {...info} />;
                <button onClick={handleReturn} className='btn btn-success'>
                    Return
                </button>
            </div>
        </div>
    );
};
