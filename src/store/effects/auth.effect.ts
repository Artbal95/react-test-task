import {LoginType} from "../../types/auth.types";
import {Effect} from "../types/general.types";
import {loadingLoginAction, loginAction, setAuthInitialStateAction} from "../actions/auth.action";
import {LoadingLoginActionType, LoginActionType} from "../types/auth/auth.types";
import {setNewsInitialStateAction} from "../actions/news.action";
import {Action} from "@reduxjs/toolkit";

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

export const logoutEffect = (): Effect<LoadingLoginActionType | Action<string>> => {
    return (dispatch) => {
        dispatch(loadingLoginAction(true))
        try {
            dispatch(setAuthInitialStateAction())
            dispatch(setNewsInitialStateAction())
            dispatch(loadingLoginAction(false))
        } catch (e: any) {
            console.log("logoutEffect", e.message)
        }
    }
}