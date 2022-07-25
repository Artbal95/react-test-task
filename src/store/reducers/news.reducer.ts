import {INewsInitialState} from "../types/news/news.types";
import {ReducerType} from "../types/general.types";
import {GET_NEWS, LOADING_GET_NEWS} from "../types/news/news.action.type";

const initialState: INewsInitialState = {
    news: [],
    loadingNews: false
}

const reducer: ReducerType<INewsInitialState> = (state = initialState, action) => {
    switch (action.type){
        case GET_NEWS:
            return {
                ...state,
                news: action.news
            }
        case LOADING_GET_NEWS:
            return {
                ...state,
                loadingNews: action.loadingNews
            }
        default:
            return state
    }
}

export default reducer