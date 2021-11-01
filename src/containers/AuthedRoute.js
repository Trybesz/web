import React from 'react';
import { Route } from 'react-router-dom';

const AuthedRoute = ({ component: Component, isPreview, ...rest }) => (
    <Route {...rest} render={(props) => (<Component {...props} />)} />
);


export default AuthedRoute;