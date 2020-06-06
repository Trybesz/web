import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

import geoServices from 'utils/geocode';

const View = styled.div``;

const LocationOption = styled.option``;

const CountryLabel = styled.label``;

const StateLabel = styled.label``;

const BioLabel = styled.label``;

const Input = styled.input``;

const Profile = (finishSetup, updateUser, data) => {
    const [boarding_Status, setBoardingStatus] = useState('');
    const [location, setLocation] = useState({ lat: '', lng: '' });
    const [bio, setBio] = useState('');

    const [address, setAddress] = useState('');

    const getAddress = (e) => {
        setLocation({ lat: e.lat, lng: e.lng });
        geoServices.getLocationFromCoords(e.lat, e.lng, setAddress);
    };

    return (
        <View>
            {data.map((e) => {
                <>
                    <CountryLabel>{e.country}</CountryLabel>
                    <StateLabel>{address}</StateLabel>
                    <LocationOption label={e.name} onClick={getAddress(e)} />
                </>;
            })}
            <Button label={'Finish Set Up'} onClick={finishSetup} />
        </View>
    );
};

export default Prefer;
