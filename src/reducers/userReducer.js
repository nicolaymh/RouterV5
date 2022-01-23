import { typesUser } from '../Types/typesUser';

export const userReducer = (state, action) => {
    switch (action.type) {
        case typesUser.login:
            return {
                ...action.payload,
                logged: true,
            };

        case typesUser.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }
};
