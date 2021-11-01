import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro';

import theme from 'styles/theme';
import GlobalStyles from 'styles/globalStyles';

const ThemeProvider = ({ children, mode }) => (
    <StyledThemeProvider theme={theme(mode)}>
        <>
            {children}
            <GlobalStyles theme={theme(mode)} />
        </>
    </StyledThemeProvider>
);

const mapStateToProps = ({ settings }) => ({
    mode: "light",
});

ThemeProvider.defaultProps = {
    mode: 'light',
};

export default connect(mapStateToProps)(ThemeProvider);