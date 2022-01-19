import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRouter = ({ component: Component, authUser, ...rest }) => {
    console.log(authUser);

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
