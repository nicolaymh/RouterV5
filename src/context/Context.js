import React, { createContext, useReducer } from 'react';
import { userReducer } from './userReducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, {});

    const data = {};

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;
