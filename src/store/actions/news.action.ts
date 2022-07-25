import {LoadingNewsActionType, NewsActionType} from "../types/news/news.types";
import {GET_NEWS, LOADING_GET_NEWS, SET_NEWS_INITIAL_STATE} from "../types/news/news.action.type";
import {NewsType} from "../../types/news.type";
import {Action} from "@reduxjs/toolkit";

export const getNewsAction = (news: NewsType[]): NewsActionType => ({
    type: GET_NEWS,
    news
})

export const loadingNewsAction = (loadingNews: boolean): LoadingNewsActionType => ({
    type: LOADING_GET_NEWS,
    loadingNews
})

export const setNewsInitialStateAction = (): Action<string> => ({
    type: SET_NEWS_INITIAL_STATE
})