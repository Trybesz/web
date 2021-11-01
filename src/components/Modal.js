import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styled, { css } from 'styled-components/macro';
import MediaQuery from 'react-responsive';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import IconButton from 'components/IconButton';
import LoadingSpinner from 'components/LoadingSpinner';

import {ArrowBackIcon, CloseIcon} from 'components/Icon'

const ButtonStyle = css`
    button {
        font-size: 1.6em;
        right: 14px;
        padding: 9px 18px;
        position: absolute;
        top: 6px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
        button {
            right: 30px;
            top: 16px;
        }
    }
`;

const ModalContent = styled(ReactModal)`
    display: table;
    height: 100%;
    width: 100%;
    z-index: ${({theme})=> theme.z.modal};
`;

const ModalCenter = styled.div`
    background: ${({ theme }) => theme.color.background};
    display: table-cell;
    vertical-align: middle;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
        background: none;
        padding: 60px 0;
    }
`;

const ModalScroll = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
        height: ${({ height }) => height || '100%'};
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        top: ${({ hasHeader }) => (hasHeader ? '50px' : 0)};
        position: absolute;
        bottom: ${({ hasFooter }) => (hasFooter ? '50px' : 0)};
        width: 100%;
    }
`;

const ModalArea = styled.div`
    background: ${({ theme }) => theme.color.background};
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: ${({ padding }) => padding || '70px 40px'};
    position: relative;
    top: 0;
    width: 100%;
    transition: transform 0.3s cubic-bezier(1, 0, 0, 1) 0.05s;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.35);
        border-radius: 3px;
        margin: 0 auto;
        max-width: ${({ maxWidth }) => maxWidth || '460px'};
        text-align: center;
        transform: ${({ animation }) => (animation ? 'translate3d(0, 30px, 0)' : null)};
        transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    }
`;

const LoadingWrapper = styled.div`
    display: flex;
    height: 48px;
    position: absolute;
    right: ${({ iconsPadding }) => `${48 * iconsPadding + 24}px`};
    top: 10px;
    width: 48px;
    z-index: 2;
    margin-right: 10%;

    div {
        padding: 0 !important;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
        top: 0;
        right: ${({ iconsPadding }) => `${48 * iconsPadding}px`};
    }
`;

const CloseButton = styled(IconButton)`
    color: ${({ theme }) => theme.color.medGrey};
    cursor: pointer;
    left: 15px;
    position: absolute;
    top: 12px;
    user-select: none;
    z-index: 4;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
        left: 0;
        top: 0;
    }

    svg {
        fill: ${({ theme }) => theme.color.medGrey};
        transition: 0.2s all ease-in-out;
    }

    .no-touch &:hover svg {
        fill: ${({ theme }) => theme.color.text};
    }
`;

const BackButton = styled(IconButton)`
    color: ${({ theme }) => theme.color.medGrey};
    cursor: pointer;
    left: 15px;
    position: absolute;
    top: 12px;
    user-select: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
        left: 0;
        top: 0;
    }

    svg {
        fill: ${({ theme }) => theme.color.medGrey};
        transition: 0.2s all ease-in-out;
    }

    .no-touch &:hover svg {
        fill: ${({ theme }) => theme.color.text};
    }
`;

const ModalHeader = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.color.background};
    border-bottom: ${({ headerBorder, theme }) => (headerBorder ? `1px solid ${theme.color.lightGrey}` : null)};
    display: flex;
    left: 0;
    justify-content: center;
    min-height: 50px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
        & + ${ModalScroll} ${ModalArea} {
            padding-bottom: 1px; /* hack for WayPoint. should be padding-top: 0; */
            padding-top: 0;
        }
    }

    & + ${ModalScroll} ${CloseButton} {
        display: none;
    }

    & + ${ModalScroll} ${LoadingWrapper} {
        display: none;
    }

    ${ButtonStyle}
`;

const ModalContentHeader = styled.div`
    align-items: center;
    border-bottom: ${({ headerBorder, theme }) => (headerBorder ? `1px solid ${theme.color.lightGrey}` : null)};
    display: flex;
    height: 70px;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 3;

    ${ButtonStyle}
`;

const Modal = ({
    children,
    closeModal,
    isOpen,
    isLoading,
    maxWidth,
    id,
    padding,
    animation,
    modalArea,
    closeButton,
    disableClose,
    previousScreen,
    modalHeader,
    modalFooter,
    wrapper: Wrapper,
    wrapperProps,
    headerBorder,
}) => {
    const [newHeight, setNewHeight] = useState('99.9999%');
    const onCloseModal = disableClose ? () => {} : closeModal;
    const hasCloseButton = closeButton && !disableClose;

    useEffect(() => {
        clearAllBodyScrollLocks();
        setTimeout(function() {
            const target = document.querySelector(`.${id} .modal-scroll`);
            if (target) disableBodyScroll(target);
        }, 100);

        // ios hack
        if (isOpen) {
            setTimeout(function() {
                setNewHeight('auto');
            }, 500);
        } else {
            setNewHeight('99.9999%');
        }

        return () => clearAllBodyScrollLocks();
    }, [isOpen, id]);

    return (
        <ModalContent
            ariaHideApp={false}
            className={`modal-content ${id || 'modal-default'}`}
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            overlayClassName={`modal-overlay ${id || 'modal-default'}${!animation ? ' modal-no-anim' : ''}`}
            bodyOpenClassName='modal-body-open'
            htmlOpenClassName='modal-html-open'
            shouldCloseOnOverlayClick={true}
        >
            <ModalCenter>
                <Wrapper {...wrapperProps}>
                    {modalHeader && (
                        <MediaQuery query='(max-width: 899px)'>
                            <ModalHeader headerBorder={headerBorder}>
                                {isLoading && (
                                    <LoadingWrapper iconsPadding={1}>
                                        <LoadingSpinner size={24} />
                                    </LoadingWrapper>
                                )}
                                {previousScreen && <BackButton icon={ArrowBackIcon} onClick={previousScreen} />}
                                {closeButton && !previousScreen && (
                                    <CloseButton icon={CloseIcon} onClick={closeModal} className='modal-close' />
                                )}
                                {modalHeader}
                            </ModalHeader>
                        </MediaQuery>
                    )}
                    <ModalScroll
                        className='modal-scroll'
                        height={newHeight}
                        hasHeader={!!modalHeader}
                        hasFooter={!!modalFooter}
                    >
                        {modalArea ? (
                            <ModalArea
                                className='modal-area'
                                maxWidth={maxWidth}
                                padding={padding}
                                animation={animation}
                            >
                                {isLoading && (
                                    <LoadingWrapper iconsPadding={previousScreen ? 2 : 1}>
                                        <LoadingSpinner size={24} />
                                    </LoadingWrapper>
                                )}
                                <MediaQuery query='(min-width: 900px)'>
                                    <ModalContentHeader headerBorder={headerBorder}>
                                        {previousScreen && <BackButton icon={ArrowBackIcon} onClick={previousScreen} />}
                                        {closeButton && !previousScreen && (
                                            <CloseButton
                                                icon={CloseIcon}
                                                onClick={closeModal}
                                                className='modal-close'
                                            />
                                        )}
                                        {modalHeader && modalHeader}
                                    </ModalContentHeader>
                                </MediaQuery>
                                {children}
                            </ModalArea>
                        ) : (
                            <>
                                {hasCloseButton && (
                                    <CloseButton icon={CloseIcon} onClick={onCloseModal} className='modal-close' />
                                )}
                                {children}
                            </>
                        )}
                    </ModalScroll>
                    {modalFooter && <MediaQuery query='(max-width: 899px)'>{modalFooter}</MediaQuery>}
                </Wrapper>
            </ModalCenter>
        </ModalContent>
    );
};

Modal.propTypes = {
    closeModal: PropTypes.func,
    previousScreen: PropTypes.func,
    modalHeader: PropTypes.object,
    isOpen: PropTypes.bool,
    isLoading: PropTypes.bool,
    maxWidth: PropTypes.string,
    padding: PropTypes.string,
    animation: PropTypes.bool,
    modalArea: PropTypes.bool,
    closeButton: PropTypes.bool,
    disableClose: PropTypes.bool,
    wrapper: PropTypes.any,
    wrapperProps: PropTypes.object,
    headerBorder: PropTypes.bool,
};

Modal.defaultProps = {
    isOpen: false,
    isLoading: false,
    maxWidth: '460px',
    padding: '70px 40px',
    animation: true,
    modalArea: true,
    closeButton: true,
    disableClose: false,
    wrapper: Fragment,
    wrapperProps: {},
    headerBorder: true,
};

export default Modal;
