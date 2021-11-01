import React from 'react';
import styled from 'styled-components/macro';
import { EllipsisIcon, AvatarIcon } from 'components/Icon';

const TopDiv = styled.div`
    width: inherit;
    display: flex;
    flex-direction: row;
    padding: 5px;
`

const TopAvatar = styled(AvatarIcon)`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: auto;
    background-size: contain;
    border-width: 1px;
    border-color: ${({ theme }) => theme.color.backgroundDark};
`

const TopProfilePicture = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: auto;
    background-size: contain;
    background-image: ${({image})=> image};
    border-width: 1px;
    border-color: ${({ theme }) => theme.color.backgroundDark};
`

const TopEllipsis = styled(EllipsisIcon)`
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    width: 25px;
    height: 20px;
    fill: ${({ theme }) => theme.color.white}
`

const Header = ({ openOptions, profileIcon = null}) => {
    

    return(<TopDiv>
        {profileIcon ? <TopProfilePicture image={profileIcon} /> : <TopAvatar/>}
        <TopEllipsis  onPress={openOptions}/>
    </TopDiv>)
}

export default Header;