import {LoadingLoginActionType, LoginActionType} from "../types/auth/auth.types";
import {LOADING_LOGIN, LOGIN, SET_AUTH_INITIAL_STATE} from "../types/auth/auth.action.types";
import {Action} from "@reduxjs/toolkit";

export const loginAction = (isLoggedIn: boolean): LoginActionType => ({
    type: LOGIN,
    isLoggedIn
})

export const loadingLoginAction = (loadingLogin: boolean): LoadingLoginActionType => ({
    type: LOADING_LOGIN,
    loadingLogin
})

export const setAuthInitialStateAction = (): Action<string> => ({
    type: SET_AUTH_INITIAL_STATE
})