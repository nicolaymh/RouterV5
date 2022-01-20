import { useContext } from 'react';
import { AuthContext } from '../context/Context';
import { useForm } from '../hooks/useForm';

export const SearchCountry = () => {
    const { setInfoCountry } = useContext(AuthContext);

    const {
        stateForm: { country },
        handleInputChange,
    } = useForm({ country: '' });

    const handleSearchCountry = (e) => {
        e.preventDefault();
        setInfoCountry(country);
    };

    return (
        <form className='row g-3 d-flex justify-content-center mt-1 border bg-light'>
            <div className='col-auto text-info'>
                <h4>Country</h4>
            </div>
            <div className='col-auto'>
                <input
                    onChange={handleInputChange}
                    autoComplete='off'
                    name='country'
                    value={country}
                    className='form-control'
                    placeholder='Find country'
                    type='text'
                />
            </div>
            <div className='col-auto'>
                <button
                    type='submit'
                    className='btn btn-outline-success mb-3'
                    onClick={handleSearchCountry}
                >
                    Search
                </button>
            </div>
        </form>
    );
};
