import axios from 'axios';
import React, { createContext, useEffect, useReducer, useState } from 'react';
import { axiosGetContinents } from '../helpers/axiosGetContinents';
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

    const [dataCountry, setDataCountry] = useState({
        data: [],
        estadoPeticion: 'correcta',
    });

    useEffect(() => {
        const fetchAxios = async () => {
            try {
                const response = await axios({
                    url: 'https://restcountries.com/v3.1/name/ass',
                    method: 'GET',
                });

                setDataCountry({
                    data: [...response.data],
                    estadoPeticion: 'correcta',
                });
            } catch (error) {
                console.log(error);
                setDataCountry({ data: [], estadoPeticion: 'fallo' });
            }
        };

        fetchAxios();
    }, [setDataCountry]);

    //* UseEffect que me guarda si el usuario esta logged o no.
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    //* useEffect que me consume la api de REST Countries solo al iniciar la aplicacion.
    useEffect(
        () => {
            async function loadContinents() {
                const response = await axiosGetContinents();
                if (response[0]?.continent) {
                    setContinents({
                        data: [...response],
                        state: false,
                    });

                    //* Iniciamos el selector de el router continents con Africa y sus paises.
                    dispatchContinent({
                        type: typesContinent[selected],
                        payload: response,
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
        dataCountry,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;
