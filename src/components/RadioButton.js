import React, {useState, useEffect} from 'react'
import styled from 'styled-components/macro'


const Label = styled.label`
    color:${({theme}) => theme.color.medGrey};
    display: block;
    font-size: 1.1em;
    padding: 7px;
`
const Input = styled.input`
    width: 25px;
    height: 25px;
    &:not(:checked) {
        opacity: 1;
        position: relative;
        pointer-events: auto;
        background-color: ${({theme}) => theme.color.white};
    }
    &:checked {
        opacity: 1;
        position: relative;
        pointer-events: auto;
        background-color: ${({theme}) => theme.color.purple};
    }
    
`

const Root = styled.div`
    width: 25px;
    height: 25px;
`

const RadioButton = ({value, checked, onChange}) => {
    return (
        <Root>
            <Input id={'radio'} type={'radio'} className="circle" value={value} checked={checked} onChange={onChange}/>
            <Label>{value}</Label>
        </Root>
    )
}

export default RadioButton;
