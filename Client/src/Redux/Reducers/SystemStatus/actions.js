import {UPDATE_SYSTEMSTATUS, INIT_SYSTEMSTATUS, SYSTEMSTATUS} from './constants';




export const UpdateSystemStatus = (payload = {}) => {
    return {
        type: UPDATE_SYSTEMSTATUS,
        payload
    }
}

export const InitSystemStatus =  (status = {}) => {
    
    
    return {
        type: INIT_SYSTEMSTATUS,
        payload : {
            statusCode: status || SYSTEMSTATUS.INIT_FAIL
        }
    }

    
}