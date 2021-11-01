import Modal from 'components/Modal';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components/macro'

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

const ExpandedContent = styled(Modal)`
`

const Content = ({content}) => {
    const [expanded, setExpanded] = useState(false)
    const expandPost = (e) => {
        e.preventDefault()
    }
}