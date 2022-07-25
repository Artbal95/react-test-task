import {ReducerType} from "../types/general.types";
import {IAuthInitialState} from "../types/auth/auth.types";
import {LOADING_LOGIN, LOGIN} from "../types/auth/auth.action.types";

const initialState: IAuthInitialState = {
    isLoggedIn: false,
    loadingLogin: false
}

const reducer: ReducerType<IAuthInitialState> = (state = initialState, action) => {
    switch (action.type){
        case LOGIN:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        case LOADING_LOGIN:
            return {
                ...state,
                loadingLogin: action.loadingLogin
            }
        default:
            return state
    }
}

export default reducer