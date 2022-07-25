import {LoadingLoginActionType, LoginActionType} from "../types/auth/auth.types";
import {LOADING_LOGIN, LOGIN} from "../types/auth/auth.action.types";

export const loginAction = (isLoggedIn: boolean): LoginActionType => ({
    type: LOGIN,
    isLoggedIn
})

export const loadingLoginAction = (loadingLogin: boolean): LoadingLoginActionType => ({
    type: LOADING_LOGIN,
    loadingLogin
})