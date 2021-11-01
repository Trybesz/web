import moment from 'moment'

const isTokenExpired = () => !!get('exp') && moment().isAfter(moment.unix(get('exp')));

const get = (key) => {
    let value = localStorage.getItem(key) || '';

    if (value === 'true') {
        value = true;
    } else if (value === 'false') {
        value = false;
    }

    return value;
};

const set = (data = {}) => {
    Object.keys(data).forEach((e) => localStorage.setItem(e, data[e]));

    return data;
};

const clear = () => {
    /* keep status of cookieAccepted */
    const cookieAccepted = get('cookieAccepted');
    localStorage.clear();
    if (cookieAccepted) set({ cookieAccepted: true });
};

const validateToken = () => isTokenExpired() && clear();

export default {
    get,
    set,
    clear,
    validateToken,
};
