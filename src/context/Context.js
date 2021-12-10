import React, { createContext, useReducer } from 'react';
import { userReducer } from './userReducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, { logged: false });

    const data = { user, dispatch };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;
