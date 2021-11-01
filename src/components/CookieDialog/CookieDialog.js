import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import Dialog, {
    DialogContent as DialogContentBase,
    DialogButtons,
    DialogOkButton,
    DialogCloseButton,
} from 'components/Dialog';

const DialogContent = styled(DialogContentBase)`
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    font-size: 1.2em;
    line-height: 1.3;
    max-width: 600px;
    padding: 15px;
`;

const DialogLInk = styled(Link)`
    color: #aaa;
    transition: 0.2s all ease-in-out;

    .no-touch &:hover {
        color: ${({ theme }) => theme.color.dark};
    }
`;

const CookieDialog = ({ isOpen, onAccept }) => {
    return (
        <Dialog isOpen={isOpen} onClose={onAccept} onOk={onAccept}>
            <DialogContent>
                <Content>
                    We use cookies for analytics, advertising and to improve our site. You agree to our use of cookies
                    by closing this message box or continuing to use our site. To find out more, including how to change
                    your settings, see our <DialogLInk to={'/policy/privacy'}>Cookie Policy</DialogLInk>.
                </Content>
            </DialogContent>
            <DialogButtons>
                <DialogOkButton label='Accept' />
                <DialogCloseButton />
            </DialogButtons>
        </Dialog>
    );
};

CookieDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onAccept: PropTypes.func.isRequired,
};

export default CookieDialog;
