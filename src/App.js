import React from 'react';
import AuthProvider from './context/Context';
import RouterV5 from './routers/RouterV5';

import 'animate.css/animate.css';

export const App = () => {
    return (
        <div>
            <AuthProvider>
                <RouterV5 />
            </AuthProvider>
        </div>
    );
};
