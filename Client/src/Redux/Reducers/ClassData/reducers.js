import {UPDATE_CLASSDATA} from './constants';

const initialState = {
    classData : []
}

export default (state = initialState, action) => {
    switch(action.type){
        case UPDATE_CLASSDATA : return {
            ...state,
            classData : action.payload
        }

        default : return state
    }
}