import {LoadingNewsActionType, NewsActionType} from "../types/news/news.types";
import {GET_NEWS, LOADING_GET_NEWS} from "../types/news/news.action.type";
import {NewsType} from "../../types/news.type";

export const getNewsAction = (news: NewsType[]): NewsActionType => ({
    type: GET_NEWS,
    news
})

export const loadingNewsAction = (loadingNews: boolean): LoadingNewsActionType => ({
    type: LOADING_GET_NEWS,
    loadingNews
})