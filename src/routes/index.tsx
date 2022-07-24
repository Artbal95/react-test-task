import {Routes, Route} from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "../hoc/PrivateRoute";
import PublicRoutes from "../hoc/PublicRoutes";
import NotFound from "../pages/Public/NotFound";

const RouterViews = (): JSX.Element => {
    return (
        <Routes>
            {routes.map(({name, path, component: Component, meta}, index) =>
                meta && meta.private ? (
                    <Route key={name + index + path} path={path} element={<PrivateRoute />}>
                        <Route path={path} element={<Component />}/>
                    </Route>
                ) : (
                    <Route key={name + index + path} path={path} element={<PublicRoutes />}>
                        <Route path={path} element={<Component />}/>
                    </Route>
                )
            )}
            <Route path={"*"} element={<NotFound />}/>
        </Routes>
    )
}

export default RouterViews