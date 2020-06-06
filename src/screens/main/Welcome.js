import React from 'react';
import styled from 'styled-components/macro';
import PictureCarousel from 'components/PictureCarousal';
import SnackBar from 'components/SnackBar';

const View = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    max-height: 100vh;
    background-image: url(${({ picture }) => picture || null});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 3;
`;

const Container = styled(View)`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1500px;
    padding: 0 20px;
    position: relative;
    width: 100%;
    z-index: 2;
`;

const H1 = styled.h1`
    font-family: 'AvenirNextRoundedW01-Re', Arial, sans-serif;
    font-size: 4em;
    font-weight: 100;
    color: #fff;
    letter-spacing: -2px;
    line-height: 1.2;
    margin: 110px 0 0;
    padding: 0 20px;
    position: relative;
    z-index: 4;
    -webkit-font-smoothing: antialiased;
    text-align: center;
`;

const Welcome = () => {
    return (
        <>
            <PictureCarousel />
            <SnackBar />
        </>
    );
};
export default Welcome;
