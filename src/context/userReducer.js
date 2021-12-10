import React from 'react';
import { types } from '../helpers/types';

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case action.types:
            return {
                logged: false,
            };

        case action.types:
            return {
                logged: true,
            };

        default:
            return state;
    }
};
