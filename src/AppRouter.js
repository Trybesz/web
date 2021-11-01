import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import auth from 'screens/auth';
import main from 'screens/main';

const AppRouter = () => (
    <>
        <Helmet>
            <title>Trybes</title>
            <meta
                name='description'
                content='Trybes'
            />
            <meta
                property='og:description'
                content='Trybes'
            />
            <meta property='og:url' content={window.location.origin} />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='Trybes' />
            <meta property='og:image' content={`${window.location.origin}/icon-1024.png`} />
        </Helmet>

        <Switch>
            <Route path='/auth' component={auth} />
            <Route path='/' component={main} />
        </Switch>
    </>
);

export default AppRouter;