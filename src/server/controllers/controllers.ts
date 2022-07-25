import {LoginType} from "../../types/auth.types";
import {NewsType} from "../../types/news.type";
import NewsMockData from "../MockData/NewsMockData";

export const returnPromise = <T>(returnValue: T, delay: number = 3000): Promise<T> => {
    return new Promise(resolve => setTimeout(() => resolve(returnValue), delay))
}

export const login = async (body: LoginType): Promise<boolean> => {
    const userLogin: LoginType = {
        email: "admin",
        password: "123456"
    }
    const {email, password} = body
    return returnPromise(email === userLogin.email && password === userLogin.password)
}

export const getNews = async (): Promise<NewsType[]> => {
    return returnPromise(NewsMockData)
}