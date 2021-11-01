import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import ThemeProvider from 'containers/ThemeProvider'
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from 'data/createStore';
import ScrollTop from 'containers/ScrollTop';
import styled from 'styled-components/macro';
import CookieDialog from 'components/CookieDialog';
import AppRouter from 'AppRouter';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({theme})=>theme.color.faintGrey};
`;


const history = createBrowserHistory();

history.stack = [window.location.pathname];

history.listen(({ pathname }, action) => {
    if (action === 'PUSH') history.stack.push(pathname);
    else if (action === 'POP') history.stack.pop();
    else if (action === 'REPLACE') history.stack.splice(history.stack.length - 1, 1, pathname);
});

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <HelmetProvider>
                    <Router history={history}>
                        <ScrollTop>
                            <Root>
                                <AppRouter />
                                <CookieDialog />
                            </Root>
                        </ScrollTop>
                    </Router>
                </HelmetProvider>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
