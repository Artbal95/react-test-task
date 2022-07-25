import {useEffect, useMemo, useState} from "react";
import {Box, Flex} from "@chakra-ui/react";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {getNewsEffect} from "../../../store/effects/news.effect";

import {NewsType} from "../../../types/news.type";

import Search from "./components/Search/Search";

import searchNewsHelper from "../../../helpers/searchNewsHelper/searchNews.helper";
import AnimationCard from "./components/AnimationCard/AnimationCard";
import Loading from "./components/Loading/Loading";

const News = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const {news, loadingNews} = useAppSelector(state => state.news)

    useEffect(() => {
        if(!news.length){
            dispatch(getNewsEffect())
        }
    }, [news, loadingNews, dispatch])

    const [search, setSearch] = useState<string>("")

    const filteredNews = useMemo<NewsType[]>(() => {
        return searchNewsHelper(news, search)
    }, [news, search])

    return (
        <Box>
            <Box w={"100%"} maxW={"520px"} px={"20px"} mx={"auto"} mb={"50px"}>
                <Search defaultValue={search} setValue={setSearch}/>
            </Box>
            {
                loadingNews ? <Loading /> :
                    <Flex px={{base: "25px", md: "50px", xl: "100px"}} alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"} gap={{base: "15px", md: "25px", xl: "35px"}}>
                        {filteredNews.map(({id, title, description, image}: NewsType, index: number) => (
                            <AnimationCard key={id + index} id={id} title={title} image={image} description={description}/>
                        ))}
                    </Flex>
            }
        </Box>
    )
}

export default News