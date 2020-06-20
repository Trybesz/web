import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Picture from 'components/Picture';
import Button from 'components/Button';

import Input from 'components/Input';

import complex2 from 'assets/Complex-2.jpg';

const View = styled.div``;

const H1 = styled.h1``;

const Interests = ({ updateStage, updateInterests }) => {
    const selected = ['rock climbing'];
    const goToNextStage = async () => {
        updateInterests({ interests: selected });
        updateStage('prefer');
    };

    return (
        <View>
            <H1>Choose Your favorite interests</H1>
            <Button label='Profile' onClick={goToNextStage} />
        </View>
    );
};

export default Interests;
