import {UPDATE_SYSTEMSTATUS, INIT_SYSTEMSTATUS, SYSTEMSTATUS} from './constants';

const initialState = {
    statusCode: SYSTEMSTATUS.NON_INIT
}

export default (state = initialState, action) => {
    switch(action.type){
        case UPDATE_SYSTEMSTATUS : 
        case INIT_SYSTEMSTATUS : 
            return {
                ...state,
                ...action.payload
            }

        default : return state
    }
}