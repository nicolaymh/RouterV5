import React from 'react';
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({ estado, component: Component, ...rest }) => {
    console.log(rest);

    return (
        <Route
            {...rest}
            component={(props) =>
                estado ? <Component /> : <Redirect to='/loguea' />
            }
        />
    );
};
