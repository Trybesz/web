import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';

import storage from 'utils/storage';
import { updateAuthModal } from 'data/modals/actions';
import { updateToken } from 'data/auth/actions';

import View from 'components/View';
import Modal from 'components/Modal';
import Banner from 'components/Banner'
import Login from './Login';
import Stage from './Stage';



const Header = styled(View)`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    max-width: 320px;
    padding: 0 0 20px;
    position: relative;
    width: 100%;

    .crop-open & {
        display: none;
    }
`;

const AuthModal = ({ route, setRoute, interestsSaved, history, updateToken }) => {
    const [closeButton, setCloseButton] = useState(true);

    useEffect(() => {
        /* In case user is registered but interests are not selected, switch to signup and open InterestModal */
        if (!route && storage.get('id') && !interestsSaved) setRoute('register');
    }, []); // eslint-disable-line

    if (!route) return null;

    return (
        <Modal
            closeModal={() => setRoute('')}
            isOpen={true}
            modalHeader={<></>}
            previousScreen={route === 'forgot' ? () => setRoute('login') : null}
            headerBorder={false}
            disableClose={route === 'register'}
            closeButton={closeButton}
        >
             <Header>
                <Banner />
            </Header>

            {route === 'login' && <Login setRoute={setRoute} history={history} updateToken={updateToken} />}
            {route === 'register' && (
                <Stage
                    setRoute={setRoute}
                    history={history}
                    updateToken={updateToken}
                    interestsSaved={interestsSaved}
                    setCloseButton={setCloseButton}
                />
            )}
        </Modal>
    );
};

AuthModal.propTypes = {
    route: PropTypes.string.isRequired,
    setRoute: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

const mapStateToProps = ({ modals }) => ({
    route: modals.authModal.route,
});

const mapDispatchToProps = {
    updateToken,
    setRoute: (route) => updateAuthModal({ route }),
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);