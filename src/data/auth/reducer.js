import storage from 'utils/storage';

import { CLEAR_STORE } from '../global/types';
import { ACCEPT_COOKIE, UPDATE_USER, UPDATE_USER_PARTIAL, UPDATE_TOKEN } from './types';

const init = () => {
    const token = storage.get('token');

    return {
        cookieAccepted: storage.get('cookieAccepted'),
        user: {},
        token,
    };
};

export default (state = init(), action) => {
    switch (action.type) {
        case ACCEPT_COOKIE:
            return { ...state, cookieAccepted: true };
        case UPDATE_USER:
            const { data, ...rest } = action.user; // eslint-disable-line
            return { ...state, user: { ...data, ...rest } };
        case UPDATE_USER_PARTIAL:
            return { ...state, user: { ...state.user, ...action.updates } };
        case UPDATE_TOKEN:
            return {
                ...state,
                token: action.token,
                user: { ...state.user, ...action.user },
            };
        case CLEAR_STORE:
            return init();
        default:
            return state;
    }
};