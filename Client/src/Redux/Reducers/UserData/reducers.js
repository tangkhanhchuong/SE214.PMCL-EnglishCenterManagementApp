import {UPDATE_USERDATA, REMOVE_USERDATA, INITIAL_STATE} from './constants';

const initialState = INITIAL_STATE;

export default (state = initialState, action) => {
    switch(action.type){
        case UPDATE_USERDATA: 
        case REMOVE_USERDATA: 
            return {
                ...state,
                ...action.payload
            }

        default : return state
    }
}