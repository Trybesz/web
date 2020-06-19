import React, { useState } from 'react';
import styled from 'styled-components/macro';
import geoServices from 'utils/geocode';
import Button from 'components/Button';

import Picture from 'components/Picture';

import MapCharts from 'components/Map';
import Input from 'components/Input';

import complex2 from 'assets/Complex-2.jpg';

const PreferForm = styled.form`
    align-content: center;
`;

const PreferInput = styled(Input)`
    padding: 0 20px 0 20px;
    color: #000;
`;

const PreferButton = styled(Button)`
    left: 50%;
    @media (max-width: 767px) {
        position: absolute;
        bottom: 10%;
        left: 0;
    }
`;
const PreferInformation = styled.h1`
    @media (max-width: 767px) {
        font-size: 2.2em;
        font-weight: 450;
    }
`;
const View = styled.div`
    z-index: 1;
`;

const Prefer = ({ updateStage, updatePreferences, data }) => {
    const [location, setLocation] = useState({ lat: '', lng: '' });
    const [price_range, setPriceRange] = useState('1000');
    const [num_of_roommates, setNumRoommates] = useState('1');

    const [address, setAddress] = useState('');

    const goToNextStage = async () => {
        updatePreferences({ desires: { location, price_range, num_of_roommates } });
        updateStage('profile');
    };

    const getAddress = (e) => {
        setLocation({ lat: e.lat, lng: e.lng });
        geoServices.getLocationFromCoords(e.lat, e.lng, setAddress);
    };

    const renderNode = (
        <View>
            <PreferForm onSubmit={goToNextStage}>
                <PreferInformation>Price range</PreferInformation>
                <PreferInput type='text' value={price_range} onChange={(e) => setPriceRange(e.target.value)} />
                <PreferInformation>Number of Roommates</PreferInformation>
                <PreferInput type='text' value={num_of_roommates} onChange={(e) => setNumRoommates(e.target.value)} />
                <PreferInformation>Choose a location that you would prefer</PreferInformation>
                <MapCharts data={data} setLocation={getAddress} />
                <PreferButton label='Profile' type='submit' />
            </PreferForm>
        </View>
    );

    return <Picture picture={complex2} node={renderNode} />;
};

export default Prefer;
