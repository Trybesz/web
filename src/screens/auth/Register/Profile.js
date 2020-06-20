import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

import Input from 'components/Input';

import geoServices from 'utils/geocode';
import Picture from 'components/Picture';

import friends2 from 'assets/Friends-2.jpg';

const ProfileForm = styled.form`
    align-content: center;
`;

const ProfileInput = styled(Input)`
    padding: 0 20px 0 20px;
    color: #000;
`;

const ProfileButton = styled(Button)`
    left: 50%;
    @media (max-width: 767px) {
        position: absolute;
        bottom: 10%;
        left: 0;
    }
`;
const ProfileInformation = styled.h1`
    @media (max-width: 767px) {
        font-size: 2.2em;
        font-weight: 450;
    }
`;
const View = styled.div`
    z-index: 1;
`;

const Profile = ({ finishSetup, updateProfile, data }) => {
    const [boarding_status, setBoardingStatus] = useState('');
    const [location, setLocation] = useState({ lat: '', lng: '' });
    const [bio, setBio] = useState('');

    const [address, setAddress] = useState('');

    const getAddress = () => {
        geoServices.getCoordsFromLocation(address, setLocation);
    };

    const finalizeProfile = () => {
        getAddress();
        updateProfile({ boarding_status, location, bio });
        finishSetup();
    };

    const renderNode = (
        <View>
            <ProfileForm title='Create your profile' onSubmit={finalizeProfile}>
                <ProfileInformation>Current address:</ProfileInformation>
                <ProfileInput type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
                <ProfileInformation>Add a bio:</ProfileInformation>
                <ProfileInput type='text' value={bio} onChange={(e) => setBio(e.target.value)} />
                <ProfileInformation>Boarding status:</ProfileInformation>
                <ProfileInput type='text' value={boarding_status} onChange={(e) => setBoardingStatus(e.target.value)} />
                <Button label='Finish Set Up' type='submit' />
            </ProfileForm>
        </View>
    );

    return <Picture picture={friends2} node={renderNode} />;
};

export default Profile;
