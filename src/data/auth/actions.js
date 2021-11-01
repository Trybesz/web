import { ACCEPT_COOKIE, UPDATE_USER, UPDATE_USER_PARTIAL, UPDATE_TOKEN } from './types';

export const acceptCookie = () => ({
    type: ACCEPT_COOKIE,
});

export const updateUser = (user) => ({
    type: UPDATE_USER,
    user,
});

export const updateUserPartial = (updates) => ({
    type: UPDATE_USER_PARTIAL,
    updates,
});

export const updateToken = (data) => ({
    type: UPDATE_TOKEN,
    ...data,
});