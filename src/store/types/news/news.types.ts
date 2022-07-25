import {NewsType} from "../../../types/news.type";
import {PayloadActionType} from "../general.types";

export interface INewsInitialState {
    news: NewsType[]
    loadingNews: boolean
}

export type NewsActionType = PayloadActionType<INewsInitialState, "news">
export type LoadingNewsActionType = PayloadActionType<INewsInitialState, "loadingNews">