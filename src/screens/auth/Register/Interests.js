import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

const View = styled.div``;

const H1 = styled.h1``;

const LocationOption = styled.option``;

const CountryLabel = styled.label``;

const StateLabel = styled.label``;

const BioLabel = styled.label``;

const Input = styled.input``;

const Interests = ({updateStage, updateUser}) => {
    const selected = ['rock climbing'];
    const goToNextStage = () => {
        updateUser({ selected });
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
