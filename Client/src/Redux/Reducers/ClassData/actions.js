import {UPDATE_CLASSDATA} from './constants';

export const updateClassData = (payload = []) => {
    return {
        type: UPDATE_CLASSDATA,
        payload
    }
}