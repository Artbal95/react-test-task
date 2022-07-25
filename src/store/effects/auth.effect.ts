import {LoginType} from "../../types";
import {Effect} from "../types/general.types";
import {loadingLoginAction, loginAction} from "../actions/auth.action";
import {LoadingLoginActionType, LoginActionType} from "../types/auth/auth.types";
import {getNewsAction} from "../actions/news.action";
import {NewsActionType} from "../types/news/news.types";

export const loginEffect = (body: LoginType): Effect<LoginActionType | LoadingLoginActionType> => {
    return async (dispatch, getState, services) => {
        dispatch(loadingLoginAction(true))
        try {
            const res = await services.loginService(body)
            dispatch(loginAction(res))
            dispatch(loadingLoginAction(false))
        } catch (e: any) {
            console.log("loginEffect", e.message)
        }
    }
}

export const logoutEffect = (): Effect<LoginActionType | LoadingLoginActionType | NewsActionType> => {
    return (dispatch) => {
        dispatch(loadingLoginAction(true))
        try {
            dispatch(loginAction(false))
            dispatch(getNewsAction([]))
            dispatch(loadingLoginAction(false))
        } catch (e: any) {
            console.log("logoutEffect", e.message)
        }
    }
}