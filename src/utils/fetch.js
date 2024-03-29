import axios from 'axios';
import storage from 'utils/storage';
const fetch = (method, path, data, params, headers, cancelToken) => {
    if (!method) throw new Error('Method is a required field.');
    if (!path) throw new Error('Path is a required field.');

    const token = storage.get('token');
    const options = {
        cancelToken,
        method: method.toUpperCase(),
        baseURL: process.env.REACT_APP_API_ENDPOINT,
        url: path,
        data: data || {},
        params: params || {},
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': 'application/json',
            ...headers,
        },
    };

    return axios(options);
};

const cancelToken = () => axios.CancelToken.source();

export default fetch;
export { cancelToken };
