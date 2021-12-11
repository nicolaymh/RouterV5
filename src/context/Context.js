import React, { createContext, useEffect, useReducer } from 'react';
import { init } from '../helpers/init';
import { userReducer } from './userReducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const data = { user, dispatch };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;
