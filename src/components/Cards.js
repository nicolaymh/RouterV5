import React from 'react';

export const Cards = () => {
    return (
        <div className='col'>
            <div className='card h-100'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg'
                    className='card-img-top'
                    alt='...'
                />
                <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>
                    <p className='card-text'>
                        This card has supporting text below as a natural lead-in
                        to additional content.
                    </p>
                </div>
                <div className='card-footer'>
                    <small className='text-muted'>
                        Last updated 3 mins ago
                    </small>
                </div>
            </div>
        </div>
    );
};
