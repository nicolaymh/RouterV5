import React from 'react';
import { Route } from 'react-router-dom';

export const PublicRouter = ({ component: Component, ...rest }) => {
    console.log(rest);

    return <Route {...rest} component={Component} />;
};
