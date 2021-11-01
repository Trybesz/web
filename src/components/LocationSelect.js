import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components/macro';

import Select from './Select';

import {cities, states} from 'assets/location-data.json';

const SelectGroup = styled.div`
    display: flex;
`;

const SelectState = styled(Select)`
    display: flex;
    flex-basis: 100%;
    height: 50px;
`;

const SelectCity = styled(Select)`
    display: flex;
    height: 50px;
    margin-left: 20px;
`;
const stateNames= ["State",...states]

const LocationSelect = ({ cityValue, stateValue, onStateChange, onCityChange }) => {
    
    const cityOptions = useMemo(()=>{
        const placeHolderLocation = ['City'];
        if(stateValue && stateValue !== "State" && cities[stateValue]) {
            placeHolderLocation.push(...cities[stateValue])
        }
        return placeHolderLocation;
    },[stateValue]);

    useEffect(()=>{
        console.log("Update")
        if(stateValue !== "State") {
            onCityChange({target: {value: "City"}})
        }
    },[stateValue])

    return (
        <SelectGroup>
            <SelectState
                label={"States"}
                value={stateValue}
                options={stateNames}
                showUpperCase={true}
                fauxValue={stateValue}
                onChange={onStateChange}
            />
            <SelectCity 
                 label={"Cities"}
                 value={cityValue}
                 options={cityOptions}
                 fauxValue={cityValue}
                 showUpperCase={true}
                 onChange={onCityChange}
            />
        </SelectGroup>
    );
};

export default LocationSelect;