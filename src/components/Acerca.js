import React from 'react';
import { useHistory } from 'react-router';

export const Acerca = () => {
    let history = useHistory();

    const handleGoHome = () => {
        console.log(history);

        history.replace('/contacto');
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
