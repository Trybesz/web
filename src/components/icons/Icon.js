import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Root = styled.svg`
    cursor: pointer;
    display: inline-block;
    fill: ${({ fill }) => fill};
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
    fill: ${({ color }) => color};
    position: relative;
    transition: all 0.2s ease-in-out;
    user-select: none;
`;

const Icon = ({ children, viewBox, style, title, ...other }) => {
    return (
        <Root {...other} viewBox={viewBox} style={style}>
            {title && <title>{title}</title>}
            {children}
        </Root>
    );
};

export default Icon;
