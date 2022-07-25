import {Routes, Route} from "react-router-dom";
import routes from "./routes";
import PrivateRoutes from "../hoc/PrivateRoutes";
import PublicRoutes from "../hoc/PublicRoutes";
import NotFound from "../components/NotFound";

const RouterViews = (): JSX.Element => {
    return (
        <Routes>
            {routes.map(({name, path, component: Component, meta}, index) =>
                meta && meta.private ? (
                    <Route key={name + index + path} path={path} element={<PrivateRoutes />}>
                        <Route path={path} element={<Component />}/>
                    </Route>
                ) : (
                    <Route key={name + index + path} path={path} element={<PublicRoutes />}>
                        <Route path={path} element={<Component />}/>
                    </Route>
                )
            )}
            <Route path={"*"} element={<NotFound title={"This Page Not Found"} path={"/"} />}/>
        </Routes>
    )
}

export default RouterViews