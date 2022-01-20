import { typesCountry } from '../Types/typesCountry';

export const countryReducer = (state, action) => {
    switch (action.type) {
        case typesCountry.FETCH_SUCCESS:
            return {
                data: action.payload,
                stateFetching: false,
            };
        case typesCountry.FETCH_ERROR:
            return {
                data: [],
                stateFetching: true,
            };

        default:
            return state;
    }
};
