/* eslint-disable no-use-before-define */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';

import axios from 'axios';

import Basic from 'screens/auth/Register/Basic';
import Prefer from 'screens/auth/Register/Prefer';
import Profile from 'screens/auth/Register/Profile';

import location from 'assets/location-data';

const View = styled.div`
    z-index: 1;
`;

const Stage = () => {
    const userRef = useRef({
        name: '',
        username: '',
        email: '',
        password: '',
        interests: [''],
        desires: {
            address: '',
            location: { lat: '', lng: '' },
            price_range: '',
            num_of_roommates: '',
        },
        bio: '',
        boarding_status: '',
    });

    const [json, setJson] = useState(null);
    const [stage, setStage] = useState('basic');

    const updateStage = useCallback(
        (update) => {
            if (stage !== update) setStage(update);
        },
        [stage],
    );

    const fetchData = (value) => {
        setJson(value);
    };

    useEffect(() => {
        fetchData(location);
    }, []);

    const updateUser = async (data) => {
        userRef.current = { ...userRef.current, ...data };
    };

    const registerUser = useCallback(() => {
        const user = userRef.current;

        const body = {
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password,
            interests: user.interests,
            bio: user.bio,
            prefer: user.prefer,
            boarding_status: user.boarding_status,
        };

        if (user.username) body.username = user.username;

        axios.post('http//localhost:8080/auth/register', body);
    }, [userRef]);

    return (
        <View>
            {stage === 'basic' && <Basic updateUser={updateUser} updateStage={updateStage} />}
            {stage === 'prefer' && <Prefer updateStage={updateStage} updatePreferences={updateUser} data={json} />}
            {stage === 'profile' && <Profile finishSetup={registerUser} updateProfile={updateUser} />}
        </View>
    );
};

export default Stage;
