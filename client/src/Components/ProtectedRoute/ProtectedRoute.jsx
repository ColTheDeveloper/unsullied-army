import {useLocation,Navigate, Outlet} from "react-router-dom" 
import { UAState } from "../../Context/uaDetailsProvider"
const ProtectedRoute=()=>{
    const location=useLocation()
    const {user}=UAState()
    console.log(user)



    return(
        user?
            <Outlet />
        :
            <Navigate to="/login" state={{from: location}} replace />

    )
}

export default ProtectedRoute;