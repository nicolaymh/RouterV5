import React, { createContext, useEffect, useReducer, useState } from 'react';
import { axiosGet } from '../helpers/axiosGet';
import { initUser } from '../helpers/initUser';
import { userReducer } from './userReducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    //* Reducer para manejar la autenticacion.
    const [user, dispatchUser] = useReducer(userReducer, {}, initUser);

    //* useState que me guarda la data de la api REST Countries.
    const [continents, setContinents] = useState({ data: [], state: false });

    //* UseEffect que me guarda si el usuario esta logged o no.
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    //* useEffect que me consume la api de REST Countries solo al iniciar la aplicacion.
    useEffect(() => {
        async function loadContinents() {
            const response = await axiosGet();

            response[0]?.continent
                ? setContinents({
                      data: [...response],
                      state: false,
                  })
                : setContinents({ data: [], state: true });
        }

        loadContinents();
    }, []);

    const data = { user, dispatchUser, continents };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;
