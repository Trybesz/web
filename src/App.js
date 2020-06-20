import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from 'screens/main/Welcome';
import Stage from 'screens/auth/Stage';
import Login from 'screens/auth/Login';

const App = () => {
    return (
        <>
            <Route exact path={'/'} component={Welcome} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/register'} component={Stage} />
        </>
    );
};

export default App;
