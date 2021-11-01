/* eslint-disable no-use-before-define */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import MediaQuery from 'react-responsive'
import styled from 'styled-components/macro';

import Basic from 'screens/auth/Register/Basic';
import Prefer from 'screens/auth/Register/Prefer';
import Profile from 'screens/auth/Register/Profile';

import Interests from './Register/Interests';
import Credentials from './Register/Credentials';
import Username from './Register/Username';
import Password from './Register/Password';
import Modal from 'components/Modal';
import Button from 'components/Button'

import storage from 'utils/storage';

const View = styled.div`
    z-index: 1;
    width: 100%;
    padding: 0 15px;
    background: ${({ theme }) => theme.color.faintGrey}
`;

const LoginButton = styled(Button)`
    width: 50%;
    margin-top: 10%;
    margin: auto;
`

const H1 = styled.h1`
font-family: 'AvenirNextRoundedW01-Re', Arial, sans-serif;
font-size: 3.75em;
font-weight: 500;
color: ${({ theme }) => theme.color.grey};
letter-spacing: -1px;
padding: 0 10px;
position: relative;
z-index: 4;
-webkit-font-smoothing: antialiased;
text-align: center;
margin-bottom: 5%;

@media (max-width: 767px) {
    font-size: 2.01em;
}
`

const ButtonDiv = styled.div`
    margin-top: 15%;
`

const Stage = ({ setRoute, history, updateToken, interestsSaved, setCloseButton }) => {
    const userRef = useRef({
        name: '',
        credentials: {
            username: '',
            email: '',
        },
        password: '',
        interests: [''],
        prefer: {
            city: '',
            state: '',
            price_range: [''],
            num_of_roommates: '',
        },
        address: '',
        bio: '',
        boarding_status: '',
    });
    const [stage, setStage] = useState('start')

    const updateStage = useCallback(
        (update) => {
            console.log(update)
            if (stage !== update) setStage(update);
        },
        [stage],
    );

    useEffect(() => {
        /* In case user is registered but interests are not selected,  open InterestModal */
        if (!interestsSaved && storage.get('_id')) setStage('interest');
    }, []); // eslint-disable-line

    useEffect(() => {

    }, [userRef.current.interests])


    const updateUser = (data) => {
        userRef.current = { ...userRef.current, ...data };
    };

    const registerUser = async () => {
        const user = userRef.current;
        const data = {
            name: user.name,
            credentials: user.credentials,
            password: user.password,
            interests: user.interests,
            bio: user.bio,
            prefer: user.prefer,
            boarding_status: user.boarding_status,
        };
        console.log(JSON.stringify(data))

        if (user.credentials.username) data.credentials.username = user.credentials.username;

        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })


        const body = await response.json()

        if (!response.ok) {
            return Promise.reject(body.error);
        }

        setRoute('');

        history.push('/');
        history.go(0);
        // Go to Main Page
    };

    return (
        <View>
            <MediaQuery query='(max-width: 767px)'>
                {stage === 'start' && <Credentials updateEmail={updateUser} updateStage={updateStage} />}
                {stage === 'username' && <Username updateUsername={updateUser} updateStage={updateStage} />}
                {stage === 'password' && <Password updatePassword={updateUser} updateStage={updateStage} />}
                {stage === 'interests' && <Interests updateInterests={updateUser} updateStage={updateStage} />}
                {stage === 'prefer' && <Prefer updateStage={updateStage} updatePreferences={updateUser} />}
                {stage === 'profile' && <Profile finishSetup={registerUser} updateProfile={updateUser} updateStage={updateStage} />}
            </MediaQuery>
            {stage === 'start' && <Basic updateUser={updateUser} updateStage={updateStage} />}
            {stage === 'interests' && <Interests updateInterests={updateUser} updateStage={updateStage} />}
            {stage === 'prefer' && <Prefer updateStage={updateStage} updatePreferences={updateUser} />}
            {stage === 'profile' && <Profile finishSetup={registerUser} updateProfile={updateUser} updateStage={updateStage} />}
            {stage === 'start' && (
                <ButtonDiv>
                    <H1>already have an account sign in here</H1>
                    <LoginButton isRoute={true} label={'Login'} route={'/auth/login'} size={"large"} />
                </ButtonDiv>
            )}
        </View>
    );
};

export default Stage;
