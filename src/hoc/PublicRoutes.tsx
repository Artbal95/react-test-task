import {Navigate, Outlet} from "react-router-dom";
import {useAppSelector} from "../hooks";

const PublicRoutes = (): JSX.Element => {

    const {isLoggedIn} = useAppSelector(state => state.auth)

    return isLoggedIn ? <Navigate to={"/"} replace/> : <Outlet />
}

export default PublicRoutes