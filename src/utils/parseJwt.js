export default (jwt) => {
    const base64 = jwt
        .split('.')[1]
        .replace('-', '+')
        .replace('_', '/');

    return JSON.parse(window.atob(base64));
};