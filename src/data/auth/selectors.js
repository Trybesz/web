import { createSelector } from 'reselect';

const getAuth = (state) => state.auth;

export const makeSelectCurrentUser = () => createSelector(getAuth, (auth) => auth.user);