import {Effect} from "../types/general.types";
import {LoadingNewsActionType, NewsActionType} from "../types/news/news.types";
import {getNews} from "../../server/controllers/controllers";
import {getNewsAction, loadingNewsAction} from "../actions/news.action";

export const getNewsEffect = (): Effect<NewsActionType | LoadingNewsActionType> => {
    return async (dispatch) => {
        dispatch(loadingNewsAction(true))
        try {
            const res = await getNews()
            console.log(res, "sakjdbkasbdajksbd")
            dispatch(getNewsAction(res))
            dispatch(loadingNewsAction(false))
        } catch (e: any) {
            console.log("getNewsEffect", e.message)
        }
    }
}