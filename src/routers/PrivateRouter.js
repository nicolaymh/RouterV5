import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRouter = ({ component: Component, authUser, ...rest }) => {
    //* Guardando la ultima ruta visitada en la aplicacion.
    localStorage.setItem('lastRoute', rest.location.pathname);

    return (
        <Route
            {...rest}
            component={(props) =>
                authUser.logged ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/login' />
                )
            }
        />
    );
};
