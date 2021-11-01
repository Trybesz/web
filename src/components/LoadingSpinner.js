import React from 'react';
import styled, { withTheme } from 'styled-components/macro';
import Spinner from 'react-spinner-material';

import isIE from 'utils/isIE';

import SpinnerGif from './SpinnerGif';

const View = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Root = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 13px 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
        padding: 60px 0;
    }
`;

const LoadingSpinner = ({ theme, className, ...rest }) => {
    return (
        <Root className={className}>
            {isIE ? <SpinnerGif /> : <Spinner size={28} width={2} color={theme.color.purple} {...rest} />}
        </Root>
    );
};

export default withTheme(LoadingSpinner);