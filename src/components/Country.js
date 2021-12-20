import React, { useContext } from 'react';
import { useParams, Redirect } from 'react-router';
import { AuthContext } from '../context/Context';

export const Country = ({ history }) => {
    const { continents } = useContext(AuthContext);

    const params = useParams();
    const { zone, country } = params;

    const countryArray = continents.data
        .filter((e) => e.continent === zone)[0]
        ?.countries.filter((e) => e.name.official === country);

    if (!countryArray) return <Redirect to='/' />;

    console.log(countryArray);

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
        openStreetMaps,
        name,
        population,
        subregion,
    } = countryArray[0];

    return (
        <div className='card mb-3'>
            <div className='row g-0'>
                <div className='col-md-4 border border-warning'>
                    <img
                        src={flags.svg}
                        className='img-fluid rounded-start'
                        alt={`flag-${name}`}
                    />
                </div>
                <div className='col-md-8 m-auto'>
                    <div className='card-body text-center'>
                        <h5 className='card-title'>{name.official}</h5>
                        <p className='card-text'>Capital: {capital}</p>
                        <p className='card-text'>{`Currencies: ${
                            Object.values(currencies)[0].symbol
                        } ${Object.values(currencies)[0].name}`}</p>
                        <p className='card-text'>
                            <small className='text-muted'>
                                Last updated 3 mins ago
                            </small>
                        </p>

                        <button
                            onClick={handleReturn}
                            className='btn btn-success'
                        >
                            Return
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
