import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

import TribesSlider from 'components/Slider'

import {ArrowBackIcon} from 'components/Icon';
import RadioButtonGroup from 'components/RadioButtonGroup';
import Modal from 'components/Modal';
import MediaQuery from 'react-responsive';
import LocationSelect from 'components/LocationSelect';

const PreferForm = styled.form`
    align-content: center;
    width: 100%;
    z-index: 4;
`;

const PreferRadioButtonGroup = styled(RadioButtonGroup)`
    width: 100%;
    height: 25px;
    z-index: 5;
`

const PreferSlider = styled(TribesSlider)`
    padding: 0 100px 0 100px;
    color: #000;
`;

const PreferInformation = styled.h1`
    @media (max-width: 767px) {
        font-size: 2.2em;
        font-weight: 450;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 580px;
    padding: 0 20px 30px;
    position: relative;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
        padding: 0 30px;
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

const Prefer = ({ updateStage, updatePreferences}) => {
    const [city, setCity] = useState("City");
    const [state, setState] = useState("State")
    const [price_range, setPriceRange] = useState([500, 500]);
    const [num_of_roommates, setNumRoommates] = useState('0');

    const goToNextStage = () => {
        updatePreferences({ prefer: { city, state, price_range, num_of_roommates } });
        updateStage('profile');
    };

    return (
        <View>
            <MediaQuery query="(max-width: 600px)">
                <PreferForm onSubmit={goToNextStage}>
                    <PreferInformation>Price range: </PreferInformation>
                    <PreferSlider props={{ minValue: 500, maxValue: 1500, step: 25 }} updateHandler={setPriceRange} />
                    <PreferInformation>Number of Roommates: </PreferInformation>
                    <PreferRadioButtonGroup values={['0', '1', '2', '3', '4+']} handleChanges={setNumRoommates} />
                    <PreferInformation>Choose a location: </PreferInformation>
                    <Row>
                        <LocationSelect cityValue={city} stateValue={state} onCityChange={(e) => setCity(e.target.value)} onStateChange={(e) => setState(e.target.value)} />
                    </Row>
                    <NewButton size={"large"} label='Profile' type='submit' />
                    <ButtonDiv>
                        <GoBackButton size={"large"} icon={<ArrowBackIcon width={25} height={25} color={"#fff"} />} onClick={() => updateStage('interests')} />
                    </ButtonDiv>
                </PreferForm>
            </MediaQuery>
            <MediaQuery query='(min-width: 601px)'>
                <Modal>
                <PreferForm onSubmit={goToNextStage}>
                    <PreferInformation>Price range: </PreferInformation>
                    <PreferSlider props={{ minValue: 500, maxValue: 1500, step: 25 }} updateHandler={setPriceRange} />
                    <PreferInformation>Number of Roommates: </PreferInformation>
                    <PreferRadioButtonGroup values={['0', '1', '2', '3', '4+']} handleChanges={setNumRoommates} />
                    <PreferInformation>Choose a location: </PreferInformation>
                    <Row>
                        <LocationSelect cityValue={city} stateValue={state} onCityChange={(e) => setCity(e.target.value)} onStateChange={(e) => setState(e.target.value)} />
                    </Row>
                    <NewButton size={"large"} label='Profile' type='submit' />
                    <ButtonDiv>
                        <GoBackButton size={"large"} icon={<ArrowBackIcon width={25} height={25} color={"#fff"} />} onClick={() => updateStage('interests')} />
                    </ButtonDiv>
                </PreferForm>
                </Modal>
            </MediaQuery>
        </View>
    )
};

export default Prefer;
