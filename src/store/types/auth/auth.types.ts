import {PayloadActionType} from "../general.types";

export interface IAuthInitialState {
    isLoggedIn: boolean
}

export type LoginActionType = PayloadActionType<IAuthInitialState, "isLoggedIn">