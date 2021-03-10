import { combineReducers } from 'redux';
import userData from './Reducers/UserData/reducers';
import systemStatus from './Reducers/SystemStatus/reducers';

import themeSwitcher from './ThemeSwitcher/reducers'

export default combineReducers({
    userData,
    systemStatus,
    themeSwitcher,
});