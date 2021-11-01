import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearStore } from 'data/global/actions';

import storage from 'utils/storage';

import View from 'components/View';
import Banner from 'components/Banner';
import Stage from './Stage';
import Login from './Login';

const Root = styled(View)`
    height: 100vh;
    justify-content: center;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) and (orientation: landscape) {
        height: auto;
    }
    @media (max-height: 700px) {
        height: auto;
    }
`;

const Wrapper = styled(View)`
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.35);
    flex-direction: column;
    margin: 60px 0;
    padding: 10px;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        max-width: 440px;
        border-radius: 3px;
    }
`;

const CardHeader = styled(View)`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin:auto;
    max-width: 320px;
    padding: 0 0 20px;
    position: relative;
    width: 100%;
`;

const Back = styled(Link)`
    left: 0;
    margin: -20px 0 0;
    position: absolute;
    top: 50%;
`;

const Icon = styled.svg`
    display: inline-block;
    fill: #999;
    height: 25px;
    user-select: none;
    width: 25px;
`;


class Auth extends Component {
    constructor(props) {
        super(props);

        props.clearStore();
        storage.clear();
    }

    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <Root>
                <Wrapper>
                    <CardHeader>
                        <Back to="/">
                            <Icon viewBox='0 0 24 24'>
                                <path d='M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z' />
                            </Icon>
                        </Back>
                        <Banner />
                    </CardHeader>
                    <Switch>
                        <Route exact path='/auth/register' component={Stage} />
                        <Route exact path='/auth/login' component={Login} />
                        <Route render={() => <Redirect to='/404' />} />
                    </Switch>
                </Wrapper>
            </Root>
        );
    }
}

Auth.propTypes = {
    clearStore: PropTypes.func.isRequired,
};

export default connect(null, { clearStore })(Auth);
