import storage from 'utils/storage';
import parseJwt from 'utils/parseJwt';

export function saveTokens(body) {
    const { token } = body;
    const { _id, exp } = parseJwt(token);

    storage.set({ id: _id, token, exp });

    return { _id, token };
}
