import {PayloadActionType} from "../general.types";

export interface IAuthInitialState {
    isLoggedIn: boolean
    loadingLogin: boolean
}

export type LoginActionType = PayloadActionType<IAuthInitialState, "isLoggedIn">

export type LoadingLoginActionType = PayloadActionType<IAuthInitialState, "loadingLogin">
