import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { slideInRight, slideOutLeft } from 'react-animations';

import compass from 'assets/compass.jpg';
import complex1 from 'assets/Complex-1.jpg';
import friends3 from 'assets/Friends-3.jpg';

const slideIn = keyframes`${slideInRight}`;
const slideOut = keyframes`${slideOutLeft}`;

const View = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    background-image: url(${({ picture }) => picture || null});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 3;
    animation 0.1s ${slideIn};
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

const PictureCarousel = () => {
    const [index, setIndex] = useState(0);
    const [finished, setFinished] = useState(false);

    const [node, setNode] = useState(
        <View key={index} picture={compass} finished={finished}>
            <Container>
                <H1>Want to find a nice place</H1>
                <H1> But struggling to afford it, and can't find roommates</H1>
            </Container>
        </View>,
    );

    const timer = useRef(3000);

    useEffect(() => {
        timer.current = setTimeout(updateNode, 5000);
    });

    const updateNode = useCallback(() => {
        if (index === 0) {
            setNode(
                <View key={index} picture={complex1} finished={finished}>
                    <Container>
                        <H1>Welcome to Tribes</H1>
                        <H1>The newest innovation for roommate searching</H1>
                    </Container>
                </View>,
            );
            setIndex(1);
        }
        if (index === 1) {
            setNode(
                <View key={index} picture={friends3} finished={finished}>
                    <Container>
                        <H1>We take your interests and preferences to match with other individuals</H1>
                        <H1>Join today!</H1>
                    </Container>
                </View>,
            );
            setIndex(2);
        }
        if (index === 2) {
            setNode(
                <View key={index} picture={compass} finished={finished}>
                    <Container>
                        <H1>Want to find a nice place</H1>
                        <H1> But struggling to afford it, and can't find roommates</H1>
                    </Container>
                </View>,
            );
            setIndex(0);
        }
    }, [timer.current]);
    return <>{node}</>;
};

export default PictureCarousel;
