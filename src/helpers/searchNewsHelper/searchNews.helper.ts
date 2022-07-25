import {NewsType} from "../../types/news.type";

const searchNewsHelper = (news: NewsType[], search: string): NewsType[] => {
    if(!search.length){
        return news
    }else {
        return news.filter(({title}: NewsType) => title.toLowerCase().includes(search.toLowerCase()))
    }
}

export default searchNewsHelper