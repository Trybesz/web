import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import Button from 'components/Button';

const View = styled.div`
    display: flex;
    position: absolute;
    z-index: 1000;
    top: 5px;
    right: 5px;
`;

const ButtonWrapper = styled.div`
    margin: 0 5px 0 5px;
`;

const SnackBar = () => {
    return (
        <View>
            <ButtonWrapper>
                <Button label={'Login'} onClick={''} />
            </ButtonWrapper>
            <ButtonWrapper>
                <Button label={'Register'} onClick={''} />
            </ButtonWrapper>
        </View>
    );
};
export default SnackBar;
