import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';
import Input from 'components/Input'
import {ArrowBackIcon} from 'components/Icon';

const NewForm = styled.form`
    align-content: center;
    height: 75%;
`;

const NewInput = styled(Input)`
    padding: 0 20px 0 20px;
    color: #000;
`;

const NewButton = styled(Button)`
    margin-top: 10%;
    width: 50%;
    margin: auto;
`;

const GoBackButton = styled(Button)`
    width: 50%;
    margin-top: 10%;
    margin: auto;
`

const View = styled.div`
    z-index: 1;
`;

const ButtonDiv = styled.div`
    margin-top: 15%;
`

const InputDiv = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 10px;
`

const Password = ({ updateStage, updatePassword }) => {
    const [password, setPassword] = useState('');

    const goToNextStage = (e) => {
        e.preventDefault()
        updatePassword({ password });
        updateStage('interests');
    };


    return (
        <View>
            <NewForm onSubmit={goToNextStage} title={'Basic Information'}>
                <InputDiv>
                    <NewInput
                        type='password'
                        label='Password:'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputDiv>
                <NewButton label={'Go to Interests'} type={'submit'} size={"large"} />
                <ButtonDiv>
                    <GoBackButton size={"large"} icon={<ArrowBackIcon width={25} height={25} color={"#fff"} />} onClick={() => updateStage('start')} />
                </ButtonDiv>
            </NewForm>
        </View>
    )
};

export default Password;
