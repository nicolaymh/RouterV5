import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export const PublicRouter = ({ component: Component, authUser, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props) =>
                !authUser.logged ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/dashboard' />
                )
            }
        />
    );
};
