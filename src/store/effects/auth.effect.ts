import {LoginType} from "../../types";
import {Effect} from "../types/general.types";
import {loginAction} from "../actions/auth.action";
import {LoginActionType} from "../types/auth/auth.types";

export const loginEffect = (body: LoginType): Effect<LoginActionType> => {
    return async (dispatch, getState, services) => {
        try {
            const res = await services.loginService(body)
            dispatch(loginAction(res))
        } catch (e) {
            console.log()
        }
    }
}