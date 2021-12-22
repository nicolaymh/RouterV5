import React, { createContext, useEffect, useReducer, useState } from 'react';
import { axiosGet } from '../helpers/axiosGet';
import { initUser } from '../helpers/initUser';
import { typesContinent } from '../Types/typesContinent';
import { continentReducer } from './continentReducer';
import { userReducer } from './userReducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    //* Reducer para manejar la autenticacion.
    const [user, dispatchUser] = useReducer(userReducer, {}, initUser);

    //* useState que me guarda la data de la api REST Countries.
    const [continents, setContinents] = useState({ data: [], state: false });

    //* useState para guardar lo seleccionado en el select del componente (CountriesContinent.js).
    const [selected, setSelected] = useState('Africa');

    //* Reducer para manejar los continentes.
    const [stateContinent, dispatchContinent] = useReducer(
        continentReducer,
        [],
    );

    //* UseEffect que me guarda si el usuario esta logged o no.
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    //* useEffect que me consume la api de REST Countries solo al iniciar la aplicacion.
    useEffect(
        () => {
            async function loadContinents() {
                const response = await axiosGet();

                // console.log(response);

                const continentDefault = response;

                if (response[0]?.continent) {
                    setContinents({
                        data: [...response],
                        state: false,
                    });

                    dispatchContinent({
                        type: typesContinent[selected],
                        payload: continentDefault,
                    });
                } else {
                    setContinents({ data: [], state: true });
                }
            }

            loadContinents();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    const data = {
        user,
        dispatchUser,
        continents,
        stateContinent,
        dispatchContinent,
        selected,
        setSelected,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;
