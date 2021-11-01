import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Picture from 'components/ContainerImage';
import Button from 'components/Button';

import Input from 'components/Input';

import complex1 from 'assets/Complex-1.jpg';

const NewForm = styled.form`
    align-content: center;
    height: 75%;
`;

const NewInput = styled(Input)`
    padding: 0 20px 0 20px;
    color: #000;
`;

const NewButton = styled(Button)`
    width: 45%;
    margin: auto;
`;

const LoginButton = styled(Button)`
    width: 45%;
    margin: auto;
`
const NewInformation = styled.h1`
    @media (max-width: 767px) {
        font-size: 2.2em;
        font-weight: 450;
    }
`;
const View = styled.div`
    z-index: 1;
`;
const ButtonDiv = styled.div`
   margin: 10px;
   padding: 25px;
`
const H1 = styled.h1`
font-family: 'AvenirNextRoundedW01-Re', Arial, sans-serif;
font-size: 3.75em;
font-weight: 500;
color: #fff;
letter-spacing: -2px;
padding: 0 10px;
position: relative;
z-index: 4;
-webkit-font-smoothing: antialiased;
text-align: center;

@media (max-width: 767px) {
    font-size: 2.01em;
}
`

const Basic = ({ updateStage, updateUser }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goToNextStage = (e) => {
        e.preventDefault();
        updateUser({ name, username, email, password });
        updateStage('interests');
    };

    return (
        <View>
        <NewInformation>Fill in basic information</NewInformation>
        <NewForm onSubmit={goToNextStage} title={'Basic Information'}>
            <NewInput type='text' label='Name:' value={name} onChange={(e) => setName(e.target.value)} />
            <NewInput
                type='text'
                label='Username:'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <NewInput type='email' label='Email:' value={email} onChange={(e) => setEmail(e.target.value)} />
            <NewInput
                type='password'
                label='Password:'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonDiv>
                <NewButton label={'Go to Interests'} type={'submit'} />
            </ButtonDiv>
        </NewForm>
    </View>
    );
};

export default Basic;
