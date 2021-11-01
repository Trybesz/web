import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const ButtonLink = styled(Link)`
    align-items: center;
    background-color: ${({ backgroundcolor, type }) => (type === 'outline' ? 'transparent' : backgroundcolor || null)};
    border-radius: 100px;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    color: ${({ color, type }) => (type === 'outline' ? `#fff` : color)};
    display: flex;
    font-size: ${({ size }) => (size === 'large' ? '1.8em' : '1.4em')};
    line-height: 1.2;
    justify-content: center;
    margin: ${(props) => props.margin || null};
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
    padding: ${({ size }) => (size === 'large' ? '20px 24px' : '14px 24px')};
    position: relative;
    transition: 0.2s all ease-in-out;
    user-select: none;
    white-space: nowrap;
`;

const Root = styled.button`
    align-items: center;
    background-color: ${({ backgroundColor, type }) => (type === 'outline' ? 'transparent' : backgroundColor || null)};
    border-radius: 100px;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    color: ${({ color, type }) => (type === 'outline' ? `#fff` : color)};
    display: flex;
    font-size: ${({ size }) => (size === 'large' ? '1.8em' : '1.4em')};
    line-height: 1.2;
    justify-content: center;
    margin: ${(props) => props.margin || null};
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
    padding: ${({ size }) => (size === 'large' ? '20px 24px' : '14px 24px')};
    position: relative;
    transition: 0.2s all ease-in-out;
    user-select: none;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
    width: 35%;
    @media (max-width: 767px) {
        width: fit-content;
    }
`;

const Label = styled.span`
    visibility: ${({ visibility }) => visibility};
`;

class Button extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        className: PropTypes.string,
        color: PropTypes.string,
        disabled: PropTypes.bool,
        loading: PropTypes.bool,
        label: PropTypes.string,
        isRoute: PropTypes.bool,
        onClick: PropTypes.func,
        type: PropTypes.oneOf(['submit', 'button', 'outline']),
        size: PropTypes.string,
        hover: PropTypes.string,
        margin: PropTypes.string,
        route: PropTypes.string,
    };

    static defaultProps = {
        color: '#fff',
        disabled: false,
        loading: false,
        type: 'button',
        size: 'normal',
        margin: null,
        loadingBackgroundColor: '#fff #fff rgba(255, 255, 255, 0)',
        loadingColor: '#fff',
        backgroundColor: '#b19cd9',
        isRoute: false,
    };

    render() {
        const {
            backgroundColor,
            className,
            color,
            disabled,
            label,
            type,
            size,
            hover,
            isRoute,
            margin,
            onClick,
            loading,
            icon,
            style,
            route,
        } = this.props;

        return !isRoute ? (
            <Root
                backgroundColor={backgroundColor}
                className={className}
                color={color}
                disabled={disabled}
                onClick={() => !disabled && !loading && onClick && onClick()}
                type={type}
                size={size}
                hover={hover}
                margin={margin}
                icon={icon}
                style={style}
            >
                {icon && icon}
                <Label visibility={loading ? 'hidden' : 'visible'}>{label}</Label>
            </Root>
        ) : (
            <ButtonLink
                backgroundcolor={backgroundColor}
                className={className}
                color={color}
                disabled={disabled}
                to={route}
                type={type}
                size={size}
                hover={hover}
                margin={margin}
                icon={icon}
                style={style}
            >
                {icon && icon}
                <Label visibility={loading ? 'hidden' : 'visible'}>{label}</Label>
            </ButtonLink>
        );
    }
}

export default Button;
