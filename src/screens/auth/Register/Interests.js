import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

import {ArrowBackIcon} from 'components/Icon';
import MediaQuery from 'react-responsive';
import Modal from 'components/Modal';

const NewForm = styled.form`
    align-content: center;
    height: 25%;
    @media (max-width: 767px) {
        height: 10%;
        margin: 10px;
    }
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
const NewInformation = styled.h1`
    @media (max-width: 767px) {
        font-size: 2.2em;
        font-weight: 450;
    }
`;

const InterestsGrid = styled.div`
    z-index: 2;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const InterestsButton = styled(Button)`
    height: 40px;
    width: 250px;
    background: #b19cd9;
    border-radius: 25px;
    color: #fff;
    margin: 5px;

    @media (max-width: 767px) {
        height: 40px;
        max-width: 90px;
        border-radius: 25px;
    }
`
const H1 = styled.h1``;

const Interests = ({ updateStage, updateInterests }) => {
    const [selected, updateSelected] = useState(['']);
    const selectionOptions = ['rock climbing', 'rugby', 'knitting', 'baking', 'football', 'anime', 'politics', 'video games', 'hiking', 'comedy', 'pop culture', 'hockey', 'dancing', 'swimming', 'reading', 'acting', 'basketball', 'music', 'singing', 'lacrosse']
    const goToNextStage = () => {
        updateInterests({ interests: selected });
        updateStage('prefer');
    };

    const selectUpdate = (selection) => {
        updateSelected(selected.concat(selection))
    }

    return (
        <View>
            <MediaQuery query='(max-width: 767px)'>
                <NewInformation>Choose basic interests</NewInformation>
                <InterestsGrid>
                    {selectionOptions.map((selection) => (
                        <InterestsButton key={selection} label={selection} disabled={selected.includes(selection)} onClick={() => selectUpdate(selection)} size={"normal"}>{selection}</InterestsButton>
                    ))}
                </InterestsGrid>
                <NewForm onSubmit={goToNextStage} title={'Basic interests'}>
                    <NewButton size={"normal"} label={'Go to preferences'} type={'submit'} />
                    <ButtonDiv>
                        <GoBackButton size={"normal"} icon={<ArrowBackIcon width={25} height={25} color={"#fff"} />} onClick={() => updateStage('password')} />
                    </ButtonDiv>
                </NewForm>
            </MediaQuery>
            <MediaQuery query='(min-width: 768px)'>
                <Modal>
                    <View>
                        <NewInformation>Choose basic interests</NewInformation>
                        <InterestsGrid>
                            {selectionOptions.map((selection) => (
                                <InterestsButton key={selection} label={selection} disabled={selected.includes(selection)} onClick={() => selectUpdate(selection)} size={"normal"}>{selection}</InterestsButton>
                            ))}
                        </InterestsGrid>
                        <NewForm onSubmit={goToNextStage} title={'Basic interests'}>
                            <NewButton size={"normal"} label={'Go to preferences'} type={'submit'} />
                            <ButtonDiv>
                                <GoBackButton size={"normal"} icon={<ArrowBackIcon width={25} height={25} color={"#fff"} />} onClick={() => updateStage('password')} />
                            </ButtonDiv>
                        </NewForm>
                    </View>
                </Modal>
            </MediaQuery>
        </View>
    )
};

export default Interests;
