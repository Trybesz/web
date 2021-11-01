import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Portal from 'containers/Portal';
import Button from 'components/Button';
import IconButton from 'components/IconButton';
import { CloseIcon } from 'components/Icon';

export const DialogContext = createContext();

const Root = styled.div`
    align-items: center;
    background: #ededed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 2;
`;

export const DialogContent = styled.div`
    flex-grow: 1;
`;

export const DialogButtons = styled.div`
    display: flex;
`;

/**
 * Originated from components/Modal/CloseButton.
 */
const CloseButton = styled(IconButton)`
    color: #aaa;
    cursor: pointer;
    padding: 24px;
    user-select: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
        padding: 0px;
    }

    svg {
        fill: #ccc;
        transition: 0.2s all ease-in-out;
    }

    :hover svg {
        fill: ${({ theme }) => theme.color.dark};
    }
`;

export const DialogCloseButtonConsumer = ({ children }) => (
    <DialogContext.Consumer>{({ onClose }) => onClose && children(onClose)}</DialogContext.Consumer>
);

export const DialogCloseButton = () => (
    <DialogCloseButtonConsumer>
        {(onClose) => <CloseButton icon={CloseIcon} onClick={onClose} />}
    </DialogCloseButtonConsumer>
);

export const DialogOkButtonConsumer = ({ children }) => (
    <DialogContext.Consumer>{({ onOk }) => onOk && children(onOk)}</DialogContext.Consumer>
);

export const DialogOkButton = (props) => (
    <DialogOkButtonConsumer>{(onOk) => <Button label='Ok' {...props} onClick={onOk} />}</DialogOkButtonConsumer>
);

/**
 * Difference from {@link Modal} is that this dialog is not modal - it does not prevent interaction with main app.
 */
const Dialog = ({ isOpen, onClose, onOk, children, className }) =>
    isOpen ? (
        <Portal>
            <DialogContext.Provider
                value={{
                    onClose,
                    onOk,
                }}
            >
                <Root className={className}>{children}</Root>
            </DialogContext.Provider>
        </Portal>
    ) : null;

Dialog.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onOk: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
};

Dialog.defaultProps = {
    isOpen: true,
    onClose: null,
    onOk: null,
};

export default Dialog;
