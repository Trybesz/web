import { CLEAR_STORE } from 'data/global/types';
import { UPDATE_AUTH_MODAL } from './types';

const init = {
    authModal: { route: '' },
};

export default (state = init, action) => {
    switch (action.type) {
        case UPDATE_AUTH_MODAL:
            return { ...state, authModal: { route: action.route, msg: action.msg } };
        case CLEAR_STORE:
            return init;
        default:
            return state;
    }
};
