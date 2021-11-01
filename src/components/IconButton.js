import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components/macro';

const Root = styled.div`
    align-items: center;
    border-radius: 50%;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    height: ${({ height }) => height + 24}px;
    justify-content: center;
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    position: relative;
    width: ${({ width }) => width + 24}px;
`;

const IconButton = ({ className, disabled, color, height, style, theme, width, onClick, icon: Icon }) => {
    return (
        <Root
            className={className}
            height={height}
            disabled={disabled}
            width={width}
            onClick={disabled ? null : onClick}
            style={style}
        >
            <Icon width={width} height={height} />
        </Root>
    );
};

IconButton.propTypes = {
    color: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    height: PropTypes.number.isRequired,
    icon: PropTypes.any.isRequired,
    width: PropTypes.number.isRequired,
};

IconButton.defaultProps = {
    color: 'primary',
    height: 24,
    width: 24,
};

export default withTheme(IconButton);