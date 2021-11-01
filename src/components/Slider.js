import React,{useState, useEffect} from "react"
import styled from 'styled-components/macro';
import {Range} from "rc-slider"

const BeforeSliderLabel = styled.label`
    z-index: 4;
    color: ${({theme})=>theme.color.medGrey};
    width: 50px;
    font-size: 2em;
    margin: auto;
`

const AfterSliderLabel = styled.label`
    z-index: 4;
    color: ${({theme})=>theme.color.medGrey};
    width: 50px;
    font-size: 2em;
    margin: auto
`

const InputDiv = styled.div`
    width: 100%;
`


const InputSlider = styled(Range)`
    height: 25px;
    margin: auto;
`

const SliderDiv = styled.div`
    z-index: 2;
    padding-top: 5%;
    padding-bottom: 5%;
    display: grid;
    grid-template-columns: 50px 60% 50px;
    grid-column-gap: 20px;
`


const TribesSlider = ({props = null, updateHandler}) =>{
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [step, setStep] = useState(0)
    const [value, setValue] = useState([])

    useEffect(()=>{
        const { minValue, maxValue, step } = props
        setMinValue(minValue)
        setMaxValue(maxValue)
        setStep(step)
        setValue([minValue, maxValue])
    },[minValue, maxValue])

    const handleValueChange = (event) => {
        console.log(event)
        setValue(event)
        updateHandler(event)
    }

    
    return (
        <SliderDiv>
            <BeforeSliderLabel>{value[0]}</BeforeSliderLabel>
            <InputDiv>
                <InputSlider allowCross={false} min={minValue} max={maxValue} value={value} step={step} onChange={handleValueChange}/>  
            </InputDiv>
            <AfterSliderLabel>{value[1]}</AfterSliderLabel>
        </SliderDiv>
    )
}

export default TribesSlider