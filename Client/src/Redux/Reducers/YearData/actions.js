import {UPDATE_YEAR} from './constants';

export const updateClassData = (year = 1) => {
    return {
        type: UPDATE_YEAR,
        year
    }
}