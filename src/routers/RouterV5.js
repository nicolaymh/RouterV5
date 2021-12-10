import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from '../components/Login';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const RouterV5 = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <PublicRouter exact path='/' component={Login} />

                    {/* <PrivateRouter /> */}
                </Switch>
            </Router>
        </div>
    );
};

export default RouterV5;
