import React from 'react';
import styled from 'styled-components/macro';
import {HeartIcon, CommentIcon, ShareIcon, NotificationIcon} from 'components/Icon';

const FeedItemFooter = styled.div`
    width: 100%;
    height: 30px;
    background: ${({ theme }) => theme.color.transparentGrey};
    border-width: 1px;
    border-color: ${({theme})=>theme.color.lightGrey};
    display: flex;
    flex-direction: row;
`
const FooterHeart = styled(HeartIcon) `
    margin-top: 5px;
    fill: ${({ theme }) => theme.color.white};
`
const FooterComment = styled(CommentIcon) `
    margin-top: 5px;
    fill: ${({ theme }) => theme.color.white};
`

const FooterShare = styled(ShareIcon)`
    margin-top: 8px;
    fill: ${({ theme }) => theme.color.white};
`

const FooterNotification =styled(NotificationIcon)`
    margin-top: 8px;
    margin-left: auto;
    margin-right: 10px;
    fill: ${({ theme }) => theme.color.white};
`

const Footer = ({metaData, openPostingNotifications}) => {
    return (
        <FeedItemFooter>
            <FooterHeart>{metaData.hearts}</FooterHeart>
            <FooterComment>{metaData.comments}</FooterComment>
            <FooterShare>{metaData.shares}</FooterShare>
            <FooterNotification onPress={openPostingNotifications}>{metaData.inbox}</FooterNotification>
        </FeedItemFooter>
    )
}

export default Footer;