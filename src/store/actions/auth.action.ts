import {LoginActionType} from "../types/auth/auth.types";
import {LOGIN} from "../types/auth/auth.action.types";

export const loginAction = (isLoggedIn: boolean): LoginActionType => ({
    type: LOGIN,
    isLoggedIn
})