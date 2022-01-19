import React from 'react';

export const ErrorContinents = () => {
    return (
        <div class='alert alert-warning text-center mt-5' role='alert'>
            There was an error querying the{' '}
            <a
                href='https://restcountries.com/#api-endpoints-v3-currency'
                className='alert-link'
                target='_blank'
                rel='noreferrer'
            >
                Api
            </a>
        </div>
    );
};
