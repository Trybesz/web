import React, { useState } from 'react';
import styled from 'styled-components/macro';
import geoServices from 'utils/geocode';
import Button from 'components/Button';

const View = styled.div``;

const H1 = styled.h1``;

const LocationOption = styled.option``;

const CountryLabel = styled.label``;

const StateLabel = styled.label``;

const BioLabel = styled.label``;

const Input = styled.input``;

const Prefer = ({ updateStage, updatePreferences, data }) => {
    const [location, setLocation] = useState({ lat: '', lng: '' });

    const [address, setAddress] = useState('');

    const goToNextStage = async () => {
        updatePreferences({ location });
        updateStage('profile');
    };

    const getAddress = (e) => {
        setLocation({ lat: e.lat, lng: e.lng });
        geoServices.getLocationFromCoords(e.lat, e.lng, setAddress);
    };

    return (
        <View>
            <H1>Choose a location that you would prefer</H1>
            <Button label='Profile' onClick={goToNextStage} />
        </View>
    );
};

export default Prefer;
