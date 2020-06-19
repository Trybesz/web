import React, { useState } from 'react';
import styled from 'styled-components/macro';
import geoServices from 'utils/geocode';
import Button from 'components/Button';

import Picture from 'components/Picture';

import MapCharts from 'components/Map';

import complex2 from 'assets/Complex-2.jpg';
const View = styled.div``;

const H1 = styled.h1``;

const Prefer = ({ updateStage, updatePreferences, data }) => {
    const [location, setLocation] = useState({ lat: '', lng: '' });

    const [address, setAddress] = useState('');

    const goToNextStage = async () => {
        updatePreferences({ location });
        console.log(location);
        updateStage('profile');
    };

    const getAddress = (e) => {
        setLocation({ lat: e.lat, lng: e.lng });
        geoServices.getLocationFromCoords(e.lat, e.lng, setAddress);
    };

    const renderNode = (
        <View>
            <H1>Choose a location that you would prefer</H1>
                <MapCharts data={data} setLocation={setLocation}/>
            <Button label='Profile' onClick={goToNextStage} />
        </View>
    );

    return <Picture picture={complex2} node={renderNode} />;
};

export default Prefer;
