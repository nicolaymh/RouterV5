import { useCallback, useContext, useEffect } from 'react';
import { AuthContext } from '../context/Context';
import { typesContinent } from '../Types/typesContinent';
import { Cards } from './Cards';

export const CountriesContinent = () => {
    const {
        continents: { data /* state */ },
        stateContinent,
        dispatchContinent,
        selected,
        setSelected,
    } = useContext(AuthContext);

    // console.log(stateContinent);
    // console.log(stateContinent.length);
    // console.log(data);

    const init = useCallback(() => {
        if (!stateContinent.length) {
            dispatchContinent({
                type: typesContinent[selected],
                payload: data,
            });
        }
    }, [data, dispatchContinent, selected, stateContinent]);

    useEffect(() => {
        init();
    }, [init]);

    const handleChangeContinent = ({ target }) => {
        setSelected(target.value.toString());

        dispatchContinent({
            type: typesContinent[target.value],
            payload: data,
        });
    };

    return (
        <div className='container mt-2 bg-dark'>
            <h4 className='text-info text-center fw-lighter fst-italic pt-2'>
                {stateContinent[0]?.continent} Countries:
                <span className='text-light'>
                    {` ${stateContinent[0]?.countries?.length}`}
                </span>
            </h4>

            <select
                className='form-select mt-3'
                value={selected}
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

            <div className='row row-cols-1 row-cols-md-3 g-4 mt-2'>
                {stateContinent[0]?.countries?.map((country) => (
                    <Cards
                        key={country.name.official}
                        continent={stateContinent}
                        country={country}
                    />
                ))}
            </div>
        </div>
    );
};
