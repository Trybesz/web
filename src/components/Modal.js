import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components/macro';

const ModalContainer = styled(ReactModal)`
    display: table;
    max-width: 460px;
    max-height: 400px;
`;

const ModalContent = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

const Modal = ({ isOpen, closeModal, children }) => {
    return (
        <ModalContainer isOpen={isOpen} onRequestClose={closeModal}>
            <ModalContent>{children}</ModalContent>
        </ModalContainer>
    );
};

export default Modal;
