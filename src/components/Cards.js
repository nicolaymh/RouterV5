import React from 'react';
import { Link } from 'react-router-dom';

export const Cards = ({ continent, country }) => {
    const { name, capital, flags, currencies } = country;

    return (
        <div className='col mb-3 animate__animated animate__rotateIn animate__slow 1s'>
            <div className='card h-100' style={{ backGround: 'gray' }}>
                <img
                    src={flags.svg}
                    className='card-img-top border-1 border border-1 border-info'
                    alt='flags.svg'
                />
                <div className='card-body d-flex flex-column justify-content-end'>
                    <h5 className='card-title'>{name.official}</h5>
                    <p className='card-text'>
                        <span className='text-primary'>Capital: </span>
                        {capital ? `${capital}` : `${name.common}`}
                    </p>
                    <p className='card-text text-info fw-bolder'>
                        Currency:{' '}
                        <span className='text-danger'>
                            {Object.values(currencies)[0].symbol || ''}
                        </span>
                        <span className='text-dark'>
                            {` ${Object.values(currencies)[0].name}`}
                        </span>
                    </p>
                </div>

                <Link
                    className='link-success text-decoration-none fs-5 btn btn-outline-warning'
                    to={`./country/${continent[0].continent}/${name.common}`}
                >
                    More...
                </Link>
            </div>
        </div>
    );
};
