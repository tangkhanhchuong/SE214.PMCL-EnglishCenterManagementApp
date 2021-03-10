import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {SYSTEMSTATUS} from '../Redux/Reducers/SystemStatus/constants';
import {InitSystemStatus} from '../Redux/Reducers/SystemStatus/actions';

import {UpdateUserData} from '../Redux/Reducers/UserData/actions';
import {Get_LocalStorage} from '../utils/KLocalStorage'


const StudentRoutes = React.lazy(() => import('./StudentRoutes'));
const LecturerRoutes = React.lazy(() => import('./LecturerRoutes'));
const ManagerRoutes = React.lazy(() => import('./ManagerRoutes'));
const AuthRoutes = React.lazy(() => import('./AuthRoutes'));


export default () => {
    

    const dispatch = useDispatch();
    const initStatus = useSelector(state => state.systemStatus.statusCode);
    const userData = useSelector(state => state.userData);

    let FirstInit = async () => {
        let userData = await Get_LocalStorage("userData");
        dispatch(InitSystemStatus(SYSTEMSTATUS.HAD_INIT));
        
        if(userData){
            let usData = JSON.parse(userData);
            dispatch(UpdateUserData({
                token: usData.token,
                roleId: usData.loadedAccount.roleId,
                userId: usData.loadedAccount.id
            }));
        }
            
        
    }

    useEffect(()=>{
        FirstInit();
    },[]);

    

    let GetRoute = () => {

        if(initStatus === SYSTEMSTATUS.NON_INIT){
            console.log("Loading");
            return <div>Loading</div>

        }else{
            
            if(userData.roleId === 1){
                console.log("Student Routes");
                return <StudentRoutes />
            }
            else if(userData.roleId === 2){
                console.log("Lecrurer Routes");
                return <LecturerRoutes />
            }
            else if(userData.roleId === 3){
                console.log("Manager Routes");
                return <ManagerRoutes />
            }
            else{
                console.log("Auth Routes");
                return <AuthRoutes />
            }
        
        }
        
        
        
    }

    return (
        GetRoute()
    )
}
