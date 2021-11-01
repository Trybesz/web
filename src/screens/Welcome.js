/* eslint-disable no-restricted-globals */
import React from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';
import { connect } from 'react-redux';
import Banner from 'components/Banner';
import {EllipsisIcon, TwitterIcon, FacebookIcon, InstagramIcon, AvatarIcon, HeartIcon, CommentIcon, ShareIcon, NotificationIcon} from 'components/Icon';
import MediaQuery from 'react-responsive'
import { updateAuthModal } from 'data/modals/actions';

import compass from 'assets/compass.jpg'
import complex1 from 'assets/Complex-1.jpg'
import complex2 from 'assets/Complex-2.jpg'
import friends1 from 'assets/Friends-1.jpg'
import friends2 from 'assets/Friends-2.jpg'
import friends3 from 'assets/Friends-3.jpg'



const View = styled.div`
    background: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 100%;
    min-height: 100vh;
    padding-bottom: 5px;
`

const WebDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background: ${({ theme }) => theme.color.green};
    z-index: ${({theme})=>theme.z.snackbar};
    position: fixed;
`

const JoinButton = styled(Button)`
    width: 150px;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 15px;
    position: relative;
    @media (max-width: ${({theme})=>theme.breakpoints.xs}px) {
       margin: auto;
    }
`

const SplashScreenDiv = styled.div`
    display: flex;
    flex-direction: row;
`
const SplashFeedDiv = styled.div`
    padding-top: 50px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 120px 0 70px 5px; 
    border-width: 1px;
    border-color: ${({ theme }) => theme.color.backgroundDark};
`
const SplashLinkDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 120px;
    position: fixed;
    right: 15px;
`

const FeedItem = styled.div`
    background: ${({ theme }) => theme.color.transparentGrey};
    min-height: 150px;
    @media (max-width: ${({theme})=>theme.breakpoints.tn - 1}px) {
        width: 250px;
    }
    width: 300px;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    border: groove;
`

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
    border-color: ${({theme})=> theme.color.backgroundDark};
`

const TopEllipsis = styled(EllipsisIcon)`
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    width: 35px;
    height: 20px;
    fill: ${({ theme }) => theme.color.white}
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
    margin-top: 5px;
    fill: ${({ theme }) => theme.color.white};
`

const FooterNotification =styled(NotificationIcon)`
    margin-top: 5px;
    fill: ${({ theme }) => theme.color.white};
`

const FeedItemContentWrapper = styled.div`
    padding: 5px 0 0 0;
    min-height: 50px;
    width: 100%;
    background: ${({ theme }) => theme.color.white};
    font-family: 'AvenirNextRoundedW01-Re', Arial, sans-serif;
    font-size: 1.25em;
    font-weight: 500;
`
const FeedItemContent = styled.img`
width: 100%;
min-height: 150px;
max-height: 250px;
margin: auto;
display: block;
background-repeat: no-repeat;
padding: 0 0 10px 0;
image-rendering: -webkit-optimize-contrast;
`


const FeedItemFooter = styled.div`
    width: 100%;
    height: 30px;
    background: ${({ theme }) => theme.color.transparentGrey};
    border-width: 1px;
    border-color: ${({theme})=>theme.color.lightGrey};
    display: flex;
    flex-direction: row;
`

const MobileFooter = styled.div`
    width: 100%;
    padding-top: 5px;
    background: ${({theme})=>theme.color.green};
    padding-bottom: 5px;
    position: fixed;
    bottom: 0;
`

const Welcome = () => {

    return (
        <View>
                <WebDiv>
                    <Banner mobile={false} />
                    <MediaQuery query='(min-width: 601px)'>
                        <JoinButton isRoute={true} label={'Join Today'} route={'/auth/register'}/>
                    </MediaQuery>
                </WebDiv>
                <SplashScreenDiv>
                    <SplashFeedDiv>
                        <FeedItem>
                            <TopDiv>
                                <TopAvatar />
                                <TopEllipsis />
                            </TopDiv>
                            <FeedItemContentWrapper>This is a cool app!<FeedItemContent src={compass}/></FeedItemContentWrapper>
                            <FeedItemFooter>
                                <FooterHeart width={30} height={30}/>
                                <FooterComment width={30} height={30}/>
                                <FooterShare width={30} height={30} />
                                <FooterNotification width={30} height={30} />
                            </FeedItemFooter>
                        </FeedItem>
                        <FeedItem>
                            <TopDiv>
                                <TopAvatar />
                                <TopEllipsis />
                            </TopDiv>
                            <FeedItemContentWrapper>Hey @here there are apartments available<FeedItemContent src={complex1} /></FeedItemContentWrapper>
                            <FeedItemFooter />
                        </FeedItem>
                        <FeedItem>
                            <TopDiv>
                                <TopAvatar />
                                <TopEllipsis />
                            </TopDiv>
                            <FeedItemContentWrapper> Hey @AlyFromBrook, this place seems good<FeedItemContent src={complex2} /></FeedItemContentWrapper>
                            <FeedItemFooter />
                        </FeedItem>
                        <FeedItem>
                            <TopDiv>
                                <TopAvatar />
                                <TopEllipsis />
                            </TopDiv>
                            <FeedItemContentWrapper>A fun day with the girls #bfforever<FeedItemContent src={friends1} /></FeedItemContentWrapper>
                            <FeedItemFooter />
                        </FeedItem>
                        <FeedItem>
                            <TopDiv>
                                <TopAvatar />
                                <TopEllipsis />
                            </TopDiv>
                            <FeedItemContentWrapper>A laid back morning<FeedItemContent src={friends2} /></FeedItemContentWrapper>
                            <FeedItemFooter />
                        </FeedItem>
                        <FeedItem>
                            <TopDiv>
                                <TopAvatar />
                                <TopEllipsis />
                            </TopDiv>
                            <FeedItemContentWrapper> An awesome day with: @alexT @noahB @TinaN<FeedItemContent src={friends3}/></FeedItemContentWrapper>
                            <FeedItemFooter />
                        </FeedItem>
                    </SplashFeedDiv>
                    <SplashLinkDiv>
                        <FacebookIcon height={40} width={40} />
                        <TwitterIcon height={40} width={40} />
                        <InstagramIcon height={40} width={40} />
                    </SplashLinkDiv>
             </SplashScreenDiv>
             <MediaQuery query='(max-width: 601px)'>
                 <MobileFooter>
                    <JoinButton isRoute={true} label={'Join Today'} route={'/auth/register'} size="large"/>
                </MobileFooter>
            </MediaQuery>
        </View>
    );
};
export default connect(null, { updateAuthModal })((Welcome));
