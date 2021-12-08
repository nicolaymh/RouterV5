import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const RouterV5 = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <h3>Home</h3>
                    </Route>
                    <Route exact path='/acerca'>
                        <h3>Acerca</h3>
                    </Route>
                    <Route exact path='/contacto'>
                        <h3>contacto</h3>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
