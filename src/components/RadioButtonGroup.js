import React, { useState } from 'react'
import styled from 'styled-components/macro'
import RadioButton from './RadioButton'


const RadioView = styled.div`
    opacity: 1;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-bottom: 15%;
    padding-top: 10%;
`

const RadioButtonGroup = ({ values, handleChanges }) => {
    const [currCheck, setCurrCheck] = useState('0')

    const updateChange = (e) => {
        if(e.target.checked) {
            setCurrCheck(e.target.value)
            handleChanges(e.target.value)
        }
    }

    return (
            <RadioView>
                {values.map((value, idx) => (
                    <RadioButton key={`key_${idx}`} value={value} checked={value === currCheck} onChange={(e) => updateChange(e)} />
                ))}
            </RadioView>
    )
}

export default RadioButtonGroup;