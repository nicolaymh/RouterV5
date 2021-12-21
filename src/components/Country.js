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
        maps,
        name,
        population,
    } = countryArray[0];

    return (
        <div className='card mb-3 mt-2 bg-light'>
            <div className='row g-0'>
                <div className='col-md-4 m-auto'>
                    <img
                        src={flags.svg}
                        className='img-fluid rounded-start border border-warning'
                        alt={`flag-${name}`}
                    />
                </div>
                <div className='col-md-8 m-auto'>
                    <div className='card-body text-center'>
                        <h5 className='card-title text-primary mb-3 fw-bold'>
                            {name.common}
                        </h5>

                        <hr className='text-dark' />

                        <p className='card-text'>
                            <span className='text-success fst-italic fw-bolder'>
                                {`Capital: `}
                            </span>
                            <span className='text-danger fw-bolder'>
                                {capital}
                            </span>
                        </p>
                        <p className='card-text'>
                            <span className='text-success fst-italic fs-5 fw-bolder'>
                                Area:
                            </span>
                            <span className='text-danger'> {area}</span> m
                            <sup>2</sup>
                        </p>
                        <p className='card-text'>
                            <span className='fw-bolder fst-italic text-success'>
                                Currencies:
                            </span>
                            <span className='text-danger'>
                                {` '${Object.values(currencies)[0].symbol}' `}
                            </span>
                            <span className='text-dark'>
                                {Object.values(currencies)[0].name}
                            </span>
                        </p>
                        <p className='card-text'>
                            <span className='text-success fw-bolder fst-italic'>
                                Continent:
                            </span>
                            <span className='text-info fw-bold'>
                                {' '}
                                {continent}
                            </span>
                        </p>
                        <p className='card-text'>
                            <span className='text-success fw-bolder fst-italic'>
                                Populations:
                            </span>
                            <span className='text-info fw-bold'>
                                {' '}
                                {population}
                            </span>
                        </p>

                        <div className='mb-3'>
                            <p className='card-text text-success fw-bolder fst-italic mb-0'>
                                Languages:
                            </p>

                            {Object.values(languages).map((ele, index) => (
                                <h6
                                    className='m-0 text-secondary fst-italic font-monospace'
                                    key={ele + index}
                                >
                                    {ele}
                                </h6>
                            ))}
                        </div>

                        <p className='card-text'>
                            <small className='text-muted'>
                                <a
                                    className='link-danger'
                                    href={maps.googleMaps}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    GoogleMAps
                                </a>
                            </small>

                            {' & '}

                            <small className='text-muted'>
                                <a
                                    className='link-warning'
                                    href={maps.openStreetMaps}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    OpenStreetMaps
                                </a>
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
