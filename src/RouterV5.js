import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Links } from './Links/Links';
import { Rutas } from './Rutas/Rutas';

export const RouterV5 = () => {
    return (
        <div>
            <Router>
                <Links />

                <Rutas />
            </Router>
        </div>
    );
};
