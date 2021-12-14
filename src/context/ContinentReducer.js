import { typesContinent } from '../Types/typesContinent';

export const continentReducer = (state, action) => {
    switch (action.type) {
        case typesContinent.Africa:
            return action.payload.filter(
                (data) => data.continent === typesContinent.Africa,
            );
        case typesContinent.America:
            return action.payload.filter(
                (data) => data.continent === typesContinent.America,
            );
        case typesContinent.Asia:
            return action.payload.filter(
                (data) => data.continent === typesContinent.Asia,
            );
        case typesContinent.Europe:
            return action.payload.filter(
                (data) => data.continent === typesContinent.Europe,
            );
        case typesContinent.Oceania:
            return action.payload.filter(
                (data) => data.continent === typesContinent.Oceania,
            );

        default:
            return state;
    }
};
