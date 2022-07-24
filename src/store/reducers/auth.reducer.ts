import {ReducerType} from "../types/general.types";
import {IAuthInitialState} from "../types/auth/auth.types";
import {LOGIN} from "../types/auth/auth.action.types";

const initialState: IAuthInitialState = {
    isLoggedIn: false
}

const reducer: ReducerType<IAuthInitialState> = (state = initialState, action) => {
    switch (action.type){
        case LOGIN:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        default:
            return state
    }
}

export default reducer