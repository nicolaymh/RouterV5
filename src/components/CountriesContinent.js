import React, { useContext } from 'react';
import { AuthContext } from '../context/Context';
import { typesContinent } from '../Types/typesContinent';
import { Cards } from './Cards';

export const CountriesContinent = () => {
    const {
        continents: { data, state },
        stateContinent,
        dispatchContinent,
    } = useContext(AuthContext);

    const handleChangeContinent = (e) => {
        console.log(data);
        dispatchContinent({
            type: typesContinent[e.target.value],
            payload: data,
        });
    };

    return (
        <div className='container'>
            <select
                className='form-select'
                name='continents'
                onChange={handleChangeContinent}
            >
                {data.map(({ id, continent }) => (
                    <option
                        className='text-capitalize'
                        key={id}
                        value={continent}
                    >
                        {continent.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
};
