import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

import Input from 'components/Input';
import Select from 'components/Select'

import {ArrowBackIcon} from 'components/Icon';
import MediaQuery from 'react-responsive';
import geoServices from 'utils/geocode';
import Modal from 'components/Modal';

const ProfileForm = styled.form`
    align-content: center;
`;

const ProfileInput = styled(Input)`
    padding: 0 20px 0 20px;
    color: #000;
`;

const ProfileButton = styled(Button)`
   margin-left: auto;
   margin-right: auto;
`;
const ProfileInformation = styled.h1`
    @media (max-width: 767px) {
        font-size: 2.2em;
        font-weight: 450;
    }
`;

const ProfileTextArea = styled.textarea`
    width: 100%;
    height: 100px;
    margin: 5px;
    background: ${({ theme }) => theme.color.white};
    font-size: 1.5em;
    font-weight: 250;
`;

const TextAreaDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
`

const ButtonDiv = styled.div`
    margin-top: 15%;
`
const GoBackButton = styled(Button)`
    width: 50%;
    margin-top: 10%;
    margin: auto;
`

const View = styled.div`
    z-index: 1;
`;

const Profile = ({ finishSetup, updateProfile, updateStage }) => {
    const [boarding_status, setBoardingStatus] = useState('N/A');
    const [location, setLocation] = useState({ lat: '', lng: '' });
    const [bio, setBio] = useState('');
    const [count, setCount] = useState(1)
    const currentCount = useRef(count)
    const LIMIT = 255;


    const [address, setAddress] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            geoServices.getLocationFromCoords(success.coords.latitude, success.coords.longitude, setAddress)
        })
    }, [])

    const getAddress = () => {
        geoServices.getCoordsFromLocation(address, setLocation);
    };

    const finalizeProfile = () => {
        getAddress();
        updateProfile({ boarding_status, address, bio });
        finishSetup();
    };

    const updateTextArea = (e) => {
        if (bio.length > e.target.value.length) {
            currentCount.current -= 1
        } else {
            currentCount.current += 1
        }
        setBio(e.target.value);
        setCount(currentCount.current)
    }

    return (
        <View>
            <MediaQuery query='(max-width: 600px)'>
                <ProfileForm title='Create your profile' onSubmit={finalizeProfile}>
                    <ProfileInformation>Current address:</ProfileInformation>
                    <ProfileInput type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
                    <ProfileInformation>Add a bio: {count - 1}/{LIMIT}
                    </ProfileInformation>
                    <TextAreaDiv>
                        <ProfileTextArea type='text' maxLength={`${LIMIT}`} value={bio} onChange={updateTextArea} />
                    </TextAreaDiv>
                    <Select
                        label='Boarding Status'
                        value={boarding_status}
                        fauxValue={boarding_status}
                        options={['Apartment', 'House', 'Condo', 'Town House', 'Dorm', 'N/A']}
                        onChange={(e) => setBoardingStatus(e.target.value)}
                        showUpperCase={false}
                    />
                    <ProfileButton size={"large"} label='Finish Set Up' type='submit' />
                    <ButtonDiv>
                        <GoBackButton size={"large"} icon={<ArrowBackIcon width={25} height={25} color={"#fff"} />} onClick={() => updateStage('prefer')} />
                    </ButtonDiv>
                </ProfileForm>
            </MediaQuery>
            <MediaQuery query='(min-width: 601px)'>
                <Modal>
                    <ProfileForm title='Create your profile' onSubmit={finalizeProfile}>
                        <ProfileInformation>Current address:</ProfileInformation>
                        <ProfileInput type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
                        <ProfileInformation>Add a bio: {count - 1}/{LIMIT}
                        </ProfileInformation>
                        <TextAreaDiv>
                            <ProfileTextArea type='text' maxLength={`${LIMIT}`} value={bio} onChange={updateTextArea} />
                        </TextAreaDiv>
                        <Select
                            label='Boarding Status'
                            value={boarding_status}
                            fauxValue={boarding_status}
                            options={['Apartment', 'House', 'Condo', 'Town House', 'Dorm', 'N/A']}
                            onChange={(e) => setBoardingStatus(e.target.value)}
                            showUpperCase={false}
                        />
                        <ProfileButton size={"large"} label='Finish Set Up' type='submit' />
                        <ButtonDiv>
                            <GoBackButton size={"large"} icon={<ArrowBackIcon width={25} height={25} color={"#fff"} />} onClick={() => updateStage('prefer')} />
                        </ButtonDiv>
                    </ProfileForm>
                </Modal>
            </MediaQuery>
        </View>
    );
};

export default Profile;
