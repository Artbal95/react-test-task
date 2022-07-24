import {IAuthInitialState, LOGIN} from "../types/auth";
import {ReducerType} from "../types/general.types";
import {Action} from "@reduxjs/toolkit";

const initialState: IAuthInitialState = {
    isLoggedIn: false
}

const reducer: ReducerType<IAuthInitialState> = (state, action) => {
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