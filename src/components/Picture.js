import React from 'react';
import styled from 'styled-components/macro';

const View = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-image: url(${({ picture }) => picture || null});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
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

const Picture = ({ picture = null, node = null }) => {
    return (
        <View picture={picture}>
            <Container>{node}</Container>
        </View>
    );
};

export default Picture;
