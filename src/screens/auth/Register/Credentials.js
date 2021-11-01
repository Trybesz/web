import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';
import Input from 'components/Input';


const NewForm = styled.form`
    align-content: center;
    height: 75%;
`;

const NewInput = styled(Input)`
    padding: 0 20px 0 20px;
    color: #000;
`;

const NewButton = styled(Button)`
    width: 50%;
    margin: auto;
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
color: ${({theme}) => theme.color.grey};
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

const View = styled.div`
    z-index: 1;
`;

const ButtonDiv = styled.div`
    margin-top: 15%;
`

const InputDiv = styled.div`
    background: ${({theme})=>theme.color.white};
    border-radius: 10px;
`

const Credentials = ({ updateStage, updateEmail }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('')

    const goToNextStage = () => {
        updateEmail({ credentials: {email: email, username: username}, name})
        updateStage('password');
    };


    return (
    <View>
        <NewForm onSubmit={goToNextStage} title={'Basic Information'}>
            <InputDiv>
                <NewInput type='email' label='Email:' value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <NewInput type='text' label='Name:' value={name} onChange={(e) => setName(e.target.value)} />
            </InputDiv>
            <InputDiv>
                    <NewInput
                        type='text'
                        label='Username:'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </InputDiv>
            <NewButton label={'Go to password'} type={'submit'} size={"large"}/>
        </NewForm>
    </View>
    )
};

export default Credentials;
