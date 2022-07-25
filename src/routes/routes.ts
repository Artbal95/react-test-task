import {RoutesTypes} from "../types";
import HomePublic from "../pages/Public/HomePublic";
import LoginPublic from "../pages/Public/LoginPublic";
import HomePrivate from "../pages/Private/HomePrivate";
import ProfilePrivate from "../pages/Private/ProfilePrivate";
import NewsPrivate from "../pages/Private/NewsPrivate";
import NewsCurrentPrivate from "../pages/Private/NewsCurrentPrivate";

const routes: RoutesTypes[] = [
    /** Public Routes **/
    {
        name: "Home",
        path: "/",
        component: HomePublic
    },
    {
        name: "Login",
        path: "/login",
        component: LoginPublic
    },
    /** Private Routes **/
    {
        name: "Home",
        path: "/home",
        component: HomePrivate,
        meta:{
            private: true
        }
    },
    {
        name: "Profile",
        path: "/profile",
        component: ProfilePrivate,
        meta: {
            private: true
        }
    },
    {
        name: "News",
        path: "/news",
        component: NewsPrivate,
        meta:{
            private: true
        }
    },
    {
        name: "News",
        path: "/news/:newsId",
        component: NewsCurrentPrivate,
        meta:{
            private: true
        }
    },
]

export default routes