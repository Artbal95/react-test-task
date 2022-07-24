import {RouteProps} from "react-router-dom";

export type RoutesTypes = {
    name: string
    path: string
    component: (props?: RouteProps) => JSX.Element
    meta?: {
        private?: boolean
    }
}

