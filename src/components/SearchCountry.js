import { useContext } from 'react';
import { AuthContext } from '../context/Context';

export const SearchCountry = () => {
    const { dataCountry } = useContext(AuthContext);

    return (
        <div>
            <h3>Search Country</h3>

            <h3>{dataCountry.estadoPeticion || 'esperando'}</h3>
        </div>
    );
};
