import React, { useContext } from 'react';
import { Switch, HashRouter } from 'react-router-dom';
import { DashboardRoutes } from './DashboardRoutes';
import Login from '../components/Login';
import { AuthContext } from '../context/Context';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const RouterV5 = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='mx-auto my-auto py-0 mx-0'>
            <HashRouter>
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
            </HashRouter>
        </div>
    );
};

export default RouterV5;
