import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../UserContexts/UserContext"


const PriveteRoute = ({ children }) => {
    const { user, loadding } = useContext(AuthContext)
    const location = useLocation()

    if (loadding) {
        return <div style={{ color: 'blue', mt: '25px', textAlign: 'center' }}>Loadding...</div>
    }

    if (user && user.uid) {
        return children
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
}

export default PriveteRoute;