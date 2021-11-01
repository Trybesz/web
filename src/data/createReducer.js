import { combineReducers } from 'redux';
import auth from './auth/reducer';
import modals from './modals/reducer'

export default () => combineReducers({auth, modals})
