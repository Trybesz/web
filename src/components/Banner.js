import React from 'react'
import styled from 'styled-components/macro'

import logo from 'assets/Logo.png';

const BannerView = styled.div`
   
`

const CircleForDiv = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 55px;
    background-color: ${({ theme }) => theme.color.purple};
    display: flex;
    margin: 5px;
`

const LogoDiv = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin: auto;
    background-image: url(${logo});
    display: block;
    background-size: contain;
`


const Banner = () => {
    return (
        <BannerView>
            <CircleForDiv>
                <LogoDiv />
            </CircleForDiv>
        </BannerView>
    )
}

export default Banner