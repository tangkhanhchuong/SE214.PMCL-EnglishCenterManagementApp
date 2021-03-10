import {UPDATE_USERDATA, REMOVE_USERDATA, INITIAL_STATE} from './constants';

export const UpdateUserData = (payload) => {
    return {
        type: UPDATE_USERDATA,
        payload
    }
}

export const RemoveUserData = (payload) => {
    return {
        type: REMOVE_USERDATA,
        payload : INITIAL_STATE
    }
}