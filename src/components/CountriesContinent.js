import React, { useContext } from 'react';
import { AuthContext } from '../context/Context';
import { Cards } from './Cards';

export const CountriesContinent = () => {
    const {
        continents: { data, state },
    } = useContext(AuthContext);

    console.log(data, state);

    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 mt-2'>
            {data.map((continent) => (
                <Cards key={continent.id} {...continent} />
            ))}
        </div>
    );
};
