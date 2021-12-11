import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { DashboardRoutes } from './DashboardRoutes';
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
                        path='/login'
                        component={Login}
                        authUser={user}
                    />

                    <PrivateRouter
                        path='/'
                        component={DashboardRoutes}
                        authUser={user}
                    />
                </Switch>
            </Router>
        </div>
    );
};

export default RouterV5;
