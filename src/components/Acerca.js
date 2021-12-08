import React from 'react';
import { useLocation } from 'react-router';

export const Acerca = () => {
    let history = useLocation();

    const handleGoHome = () => {
        console.log(history);
    };

    return (
        <div className='container'>
            <h3>Acerca</h3>

            <button className='btn btn-outline-info' onClick={handleGoHome}>
                Go Home
            </button>
        </div>
    );
};
