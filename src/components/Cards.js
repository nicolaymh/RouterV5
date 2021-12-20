import React from 'react';

export const Cards = ({ name, capital, flags, currencies, languages }) => {
    return (
        <div className='col'>
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
                    <p className='card-text'>
                        <span className='text-primary'>Language: </span>
                        {Object.values(languages)}
                    </p>
                    <p>
                        <span className='text-info'>
                            Currencies: {Object.values(currencies)[0].symbol}{' '}
                        </span>
                        {Object.values(currencies)[0].name}
                    </p>
                </div>
                <div className='card-footer'>
                    <small className='text-primary'>MORE...</small>
                </div>
            </div>
        </div>
    );
};
