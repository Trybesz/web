import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Picture from 'components/Picture';
import Button from 'components/Button';

import Input from 'components/Input';

import complex1 from 'assets/Complex-1.jpg';

const NewForm = styled.form`
    align-content: center;
`;

const NewInput = styled(Input)`
    padding: 0 20px 0 20px;
    color: #000;
`;

const NewButton = styled(Button)`
    left: 50%;
    @media (max-width: 767px) {
        position: absolute;
        bottom: 10%;
        left: 0;
    }
`;
const NewInformation = styled.h1`
    @media (max-width: 767px) {
        font-size: 2.2em;
        font-weight: 450;
    }
`;
const View = styled.div`
    z-index: 1;
`;

const Basic = ({ updateStage, updateUser }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    const goToNextStage = (e) => {
        e.preventDefault();
        updateUser({ name, username, email, password });
        updateStage('prefer');
    };

    const renderName = (
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
                <NewButton label={'Go to Preferences'} type={'submit'} />
            </NewForm>
        </View>
    );

    return <Picture picture={complex1} node={renderName} />;
};

export default Basic;
