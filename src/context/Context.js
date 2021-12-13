import React, { createContext, useEffect, useReducer, useState } from 'react';
import { axiosGet } from '../helpers/axiosGet';
import { init } from '../helpers/init';
import { userReducer } from './userReducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, {}, init);
    const [, setProducts] = useState({ data: [], state: false });

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        async function loadPaises() {
            const response = await axiosGet();

            response[0]?.continent
                ? setProducts({
                      data: [...response],
                      state: false,
                  })
                : setProducts({ data: [], state: true });
        }

        loadPaises();
    }, []);

    const data = { user, dispatch };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;
