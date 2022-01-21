import React, { createContext, useEffect, useReducer, useState } from 'react';
import { axiosGetContinents } from '../helpers/axiosGetContinents';
import { initInfoCountry } from '../helpers/initInfoCountry';
import { initUser } from '../helpers/initUser';
import { useAxios } from '../hooks/useAxios';
import { typesContinent } from '../Types/typesContinent';
import { typesCountry } from '../Types/typesCountry';
import { continentReducer } from './continentReducer';
import { countryReducer } from './countryReducer';
import { userReducer } from './userReducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    //* Reducer para manejar la autenticacion.
    const [user, dispatchUser] = useReducer(userReducer, {}, initUser);

    //* Reducer para manejar los continentes.
    const [stateContinent, dispatchContinent] = useReducer(
        continentReducer,
        [],
    );

    //* Reducer para manejar la consulta por pais a la Api:
    const [countryFetching, dispatchCountryFetching] = useReducer(
        countryReducer,
        {
            data: [],
        },
    );

    //* useState que me guarda la data de la api REST Countries.
    const [continents, setContinents] = useState({ data: [], state: false });

    //* useState para guardar lo seleccionado en el select del componente (CountriesContinent.js).
    const [selected, setSelected] = useState('Africa');

    //* useState que me guarda lo ingresado en el formulario en el componente SearchCountry al pulsar el boton:
    const [infoCountry, setInfoCountry] = useState(initInfoCountry);

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

                    //* Iniciamos el selector de el router continents con Africa y sus paises en la primera carga de la aplicacion.
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

    //* useEffect que se ejecuta cada vez que se busca un pais en el componente SearchCountry.js..
    useEffect(() => {
        async function LoadCountry() {
            const response = await useAxios(
                `https://restcountries.com/v3.1/name/${infoCountry}?fullText=true`,
            );

            localStorage.setItem('infoCountry', JSON.stringify(infoCountry));

            console.log(response?.data);

            if (response?.data) {
                dispatchCountryFetching({
                    type: typesCountry.FETCH_SUCCESS,
                    payload: response.data,
                });
            } else {
                dispatchCountryFetching({
                    type: typesCountry.FETCH_ERROR,
                });
            }
        }

        LoadCountry();
    }, [infoCountry]);

    const data = {
        user,
        dispatchUser,
        continents,
        stateContinent,
        dispatchContinent,
        selected,
        setSelected,
        countryFetching,
        setInfoCountry,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;
