import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';
import Login from '../components/Login';
import { AuthContext } from '../context/Context';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const RouterV5 = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Router>
                <Switch>
                    <PublicRouter
                        exact
                        path='/'
                        component={Login}
                        authUser={user}
                    />

                    <PrivateRouter
                        exact
                        path='/dashboard'
                        component={Dashboard}
                        authUser={user}
                    />
                </Switch>
            </Router>
        </div>
    );
};

export default RouterV5;
