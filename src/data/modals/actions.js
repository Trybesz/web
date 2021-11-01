import { UPDATE_AUTH_MODAL } from './types'

export const updateAuthModal = (data) => ({
    type: UPDATE_AUTH_MODAL,
    ...data,
});