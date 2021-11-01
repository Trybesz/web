import React from 'react';
import styled from 'styled-components/macro';

const View = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Image = styled(View)`
    background-image: url(${({ image }) => image || null});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: ${({ type }) => (type === 'wide' ? '300px' : '450px')};
    max-width: 330px;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
        max-width: 500px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
        height: ${({ height }) => height || '450px'};
        max-width: ${({ type }) => (type === 'wide' ? '660px' : '330px')};
    }
`;

const ContainerBoxImage = styled(View)`
    width: 100%;
`;

const ContainerImage = ({image, height, type}) => {
    return (
        <ContainerBoxImage>
            <Image image={image} height={height} type={type} />
        </ContainerBoxImage>
    )
}

export default ContainerImage;
