import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Picture from 'components/Picture';
import SnackBar from 'components/SnackBar';

import compass from 'assets/compass.jpg';

const View = styled.div`
    height: 100vh;
    max-width: 2200 px;
    width: 100%;
    z-index: 9;
`;

const H1 = styled.h1`
    font-family: 'AvenirNextRoundedW01-Re', Arial, sans-serif;
    font-size: 3.75em;
    font-weight: 100;
    color: #fff;
    letter-spacing: -2px;
    padding: 0 10px;
    position: relative;
    z-index: 4;
    -webkit-font-smoothing: antialiased;
    text-align: center;
`;

const Welcome = () => {
    const node = (
        <>
            <H1>Want to find a nice place</H1>
            <H1> But struggling to afford it, and can't find roommates</H1>
            <H1>Welcome to Tribes</H1>
            <H1>The newest innovation for roommate searching</H1>
            <H1>We take your interests and preferences to match with other individuals</H1>
            <H1>Join today!</H1>
        </>
    );
    return (
        <View>
            <Picture picture={compass} node={node} />
            <SnackBar />
        </View>
    );
};
export default Welcome;
