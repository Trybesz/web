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

class Icon extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        fill: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        style: PropTypes.object,
        viewBox: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
    };

    static defaultProps = {
        fill: '#aaa',
        height: 24,
        width: 24,
    };

    render() {
        const { children, viewBox, style, title, ...other } = this.props;

        return (
            <Root {...other} viewBox={viewBox} style={style}>
                {title && <title>{title}</title>}
                {children}
            </Root>
        );
    }
}

export default Icon;
