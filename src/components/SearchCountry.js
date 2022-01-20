import { useForm } from '../hooks/useForm';

export const SearchCountry = () => {
    const {
        stateForm: { country },
        handleInputChange,
    } = useForm({ country: '' });

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
                <button type='submit' className='btn btn-outline-success mb-3'>
                    Search
                </button>
            </div>
        </form>
    );
};
