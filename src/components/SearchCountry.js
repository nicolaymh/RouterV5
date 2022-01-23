import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Context';
import { useForm } from '../hooks/useForm';
import { ShowCountry } from './ShowCountry';

import queryString from 'query-string';

export const SearchCountry = ({ history }) => {
    const {
        countryFetching: { data },
        infoCountry,
        setInfoCountry,
    } = useContext(AuthContext);

    const location = useLocation();
    const { q = infoCountry || '' } = queryString.parse(location.search);

    const { stateForm, handleInputChange } = useForm({ country: q });
    const { country } = stateForm;

    const handleSearchCountry = (e) => {
        e.preventDefault();

        if (q === country) {
            return;
        }

        setInfoCountry(country.trim());
        history.push(`?q=${country}`);
    };

    return (
        <form
            onSubmit={handleSearchCountry}
            className='mx-0 row g-3 d-flex justify-content-center mt-0 border bg-light'
        >
            <div className='col-auto text-info'>
                <h4 className='my-auto'>Country</h4>
            </div>
            <div className='col-auto'>
                <input
                    onChange={handleInputChange}
                    autoComplete='off'
                    name='country'
                    value={country}
                    className='form-control text-sm-start text-center'
                    placeholder='Find country'
                    type='text'
                />
            </div>
            <div className='col-auto'>
                <button type='submit' className='btn btn-outline-success mb-3'>
                    Search
                </button>
            </div>

            {q === '' && (
                <div className='alert alert-info text-center'>
                    Search Country:{' '}
                    <span className='fw-bolder'>(full country name)</span>
                </div>
            )}

            {q !== '' && data.length === 0 && (
                <div className='alert alert-danger text-center'>
                    No country found by name:{' '}
                    <span className='fw-bolder'>{q}</span>
                </div>
            )}

            {q !== '' && data.length !== 0 && (
                <div className='card mb-3 mt-2 bg-dark'>
                    <div className='row g-0 d-flex justify-content-sm-center'>
                        <ShowCountry {...data[0]} />
                    </div>
                </div>
            )}
        </form>
    );
};
