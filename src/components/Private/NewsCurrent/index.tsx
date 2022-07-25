import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks";
import {useMemo} from "react";
import {NewsType} from "../../../types/news.type";
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import BreadCrumbs from "../../constants/BreadCrumbs/BreadCrumbs";
import NotFound from "../../NotFound";

const NewsCurrent = (): JSX.Element => {

    const {newsId} = useParams<{ newsId: string }>()

    const {news, loadingNews} = useAppSelector(state => state.news)

    const currentNews = useMemo<NewsType>(() => {
        const filtered = news.filter(({id}: NewsType) => `${id}` === newsId)
        return filtered.length ? filtered[0] : {}
    }, [news, newsId])

    return (
        <>
            {
                loadingNews ? <Box>Loading</Box> :
                    Object.keys(currentNews).length ?
                        <Flex flexDir={"column"} gap={"25px"}>
                            <BreadCrumbs title={currentNews.title}/>
                            <Box w={"100%"} maxW={"520px"}>
                                <Image src={currentNews.image}/>
                            </Box>
                            <Box w={"100%"} maxW={"290px"}>
                                <Text fontWeight={700}
                                      fontSize={{base: "16px", md: "18px", xl: "20px"}}>{currentNews.title}</Text>
                            </Box>
                            <Text fontWeight={400} fontSize={{base: "14px", md: "16px", xl: "18px"}}>
                                {currentNews.description.repeat(50)}
                            </Text>
                        </Flex> : <NotFound title={"Current News Not Found"} path={"/news"}/>
            }
        </>
    )
}

export default NewsCurrent