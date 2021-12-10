import React from 'react';
import { Route } from 'react-router-dom';

export const PrivateRouter = ({ component: Component, ...rest }) => {
    console.log(rest);

    return <Route {...rest} />;
};
