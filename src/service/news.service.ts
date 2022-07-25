import {getNews} from "../server/controllers/controllers";
import {NewsType} from "../types/news.type";

export const getNewsService = (): Promise<NewsType[]> => {
    return getNews()
}