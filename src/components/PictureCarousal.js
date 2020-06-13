import React from 'react';
import styled from 'styled-components/macro';

import compass from 'assets/compass.jpg';

const View = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-image: url(${({ picture }) => picture || null});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 3;
`;

const Container = styled(View)`
    display: flex;
    flex-direction: column;
    max-width: 1500px;
    padding: 0 20px;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
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

const Picture = () => {
  
    return <View picture={compass}>
    <Container>
        <H1>Want to find a nice place</H1>
        <H1> But struggling to afford it, and can't find roommates</H1>
        <H1>Welcome to Tribes</H1>
        <H1>The newest innovation for roommate searching</H1>
        <H1>We take your interests and preferences to match with other individuals</H1>
        <H1>Join today!</H1>
    </Container>
</View>;
};

export default Picture;
