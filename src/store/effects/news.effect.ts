import {Effect} from "../types/general.types";
import {LoadingNewsActionType, NewsActionType} from "../types/news/news.types";
import {getNewsAction, loadingNewsAction} from "../actions/news.action";

export const getNewsEffect = (): Effect<NewsActionType | LoadingNewsActionType> => {
    return async (dispatch, getState, services) => {
        dispatch(loadingNewsAction(true))
        try {
            const res = await services.getNewsService()
            dispatch(getNewsAction(res))
            dispatch(loadingNewsAction(false))
        } catch (e: any) {
            console.log("getNewsEffect", e.message)
        }
    }
}