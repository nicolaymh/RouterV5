import axios from 'axios';
import React, { createContext, useEffect, useReducer, useState } from 'react';
import { init } from '../helpers/init';
import { userReducer } from './userReducer';

const AuthContext = createContext();

async function getProducts() {
    try {
        const response = await axios({
            url: 'https://breakingbadapi.com/api/characters',
            method: 'GET',
        });

        return response;
    } catch (e) {
        console.log(e);
    }
}

const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, {}, init);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const response = await getProducts();
            console.log(response);
            return response;
        }

        loadProducts();
    });

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const data = { user, dispatch };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;
