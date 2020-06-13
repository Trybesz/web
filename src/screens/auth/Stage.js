import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

import axios from 'axios';

import Name from 'screens/auth/Register/Name';
import Username from 'screens/auth/Register/Username';
import Email from 'screens/auth/Register/Email';
import Password from 'screens/auth/Register/Password';
import Interests from 'screens/auth/Register/Interests';
import Prefer from 'screens/auth/Register/Prefer';
import Profile from 'screens/auth/Register/Profile';

import location from 'assets/location-data';

const View = styled.div``;

const Stage = () => {
    const [stage, setStage] = useState('name');
    const userRef = userRef({
        name: '',
        username: '',
        email: '',
        password: '',
        interests: [''],
        prefer: null,
        profile: '',
        boarding_status: '',
    });
    const [json, setJson] = useState(null);

    const fetchData = (value) => {
        setJson(value);
    };

    useEffect(() => {
        fetchData(location)
    }, []);

    const updateUser = async (data) => {
        userRef.current = { ...userRef.current, ...data };
    };

    const registerUser = useCallback(() => {
        const user = userRef.current;

        const body = {
            name: user.name,
            phone: user.phone,
            countryCode: user.countryCode,
            email: user.email,
            password: user.password,
            code: user.code,
        };

        if (user.username) body.username = user.username;

        axios.post('/register', body);
    }, []);

    return (
        <View>
            {stage === 'name' && <Name updateStage={setStage} updateUser={updateUser} />}
            {stage === 'username' && <Username updateStage={setStage} updateUser={updateUser}/>}
            {stage === 'email' && <Email updateStage={setStage} updateUser={updateUser} />}
            {stage === 'password' && <Password updateStage={setStage} updateUser={updateUser} />}
            {stage === 'interests' && <Interests updateStage={setStage} updateUser={updateUser} />}
            {stage === 'prefer' && <Prefer updateStage={setStage} updateUser={updateUser} data={json} />}
            {stage === 'profile' && <Profile finishSetup={registerUser} updateUser={updateUser} data={json} />}
        </View>
    );
};

export default Stage;
