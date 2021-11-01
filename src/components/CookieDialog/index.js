import { connect } from 'react-redux';
import storage from 'utils/storage';
import { acceptCookie } from 'data/auth/actions';
import CookieDialog from './CookieDialog';

export default connect((state) => ({ isOpen: !state.auth.cookieAccepted }), {
    onAccept: () => {
        // TODO: use more robust solution like redux-persist lib
        storage.set({ cookieAccepted: true });
        return acceptCookie();
    },
})(CookieDialog);
