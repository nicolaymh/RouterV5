import { typesCountry } from '../Types/typesCountry';

export const countryReducer = (state, action) => {
    switch (action.type) {
        case typesCountry.FETCH_SUCCESS:
            return {
                data: action.payload,
            };
        case typesCountry.FETCH_ERROR:
            return {
                data: [],
            };

        default:
            return state;
    }
};
