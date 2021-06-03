import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SYSTEMSTATUS } from '../Redux/Reducers/SystemStatus/constants'
import { InitSystemStatus } from '../Redux/Reducers/SystemStatus/actions'

import { UpdateUserData } from '../Redux/Reducers/UserData/actions'
import { Get_LocalStorage } from '../utils/KLocalStorage'


const StudentRoutes = React.lazy(() => import('./StudentRoutes'))
const InstructorRoutes = React.lazy(() => import('./InstructorRoutes'))
const AdminRoutes = React.lazy(() => import('./AdminRoutes'))
const AuthRoutes = React.lazy(() => import('./AuthRoutes'))


export default () => {
    const dispatch = useDispatch()
    const initStatus = useSelector(state => state.systemStatus.statusCode)
    const userData = useSelector(state => state.userData)


    let FirstInit = async () => {
        let us = localStorage.getItem('userData')
        dispatch(InitSystemStatus(SYSTEMSTATUS.HAD_INIT))

        if (us) {
            let usData = JSON.parse(us)
            dispatch(UpdateUserData({
                token: usData.token,
                roleId: usData.role_id,
                userId: usData.userId
            }))
        }


    }

    useEffect(() => {
        FirstInit()
    }, [])



    let GetRoute = () => {

        let us = JSON.parse(localStorage.getItem('userData'))
        if (initStatus === SYSTEMSTATUS.NON_INIT) {
            return <div>Loading</div>
        } else {
            if (!us) {
                console.log("Auth Routes")
                return <AuthRoutes />
            }
            else {
                if (us.role_id == 1) {
                    console.log("Student Routes")
                    return <StudentRoutes />
                }
                else if (us.role_id == 2) {
                    console.log("Instructor Routes")
                    return <InstructorRoutes />
                }
                else if (us.role_id == 3) {
                    console.log("Manager Routes")
                    return <AdminRoutes />
                }
                else {
                    console.log("Auth Routes")
                    return <AuthRoutes />
                }
            }

        }
    }

    return (
        GetRoute()
    )
}
