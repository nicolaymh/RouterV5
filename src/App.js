import React from 'react';
import AuthProvider from './context/Context';
import RouterV5 from './routers/RouterV5';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'animate.css/animate.css';

export const App = () => {
    return (
        <div className=''>
            <AuthProvider>
                <RouterV5 />
            </AuthProvider>
        </div>
    );
};
