import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

interface ICardProps {
    id: number
    title: string
    description: string
    image: string
}

const Card = ({id, image, title, description}: ICardProps): JSX.Element => {

    const navigate = useNavigate()

    return (
        <Flex
            flexDir={"column"}
            borderRadius={"15px"}
            overflow={"hidden"}
            w={{base: "200px", md: "225px", lg: "250px"}}
            minH={{base: "300px", md: "325px", lg: "350px"}}
            bgColor={"#FFF"}
            boxShadow={"2px 2px 10px -3px #000"}
            transition={".3s"}
            cursor={"pointer"}
            _hover={{
                transform: "scale(1.1)",
            }}
            onClick={() => navigate(`/news/${id}`)}
        >
            <Box w={"100%"} h={"150px"}>
                <Image src={image} w={"100%"} h={"100%"} objectFit={"cover"}/>
            </Box>
            <Box p={"15px 25px 0"}>
                <Text fontWeight={700} fontSize={{base: "16px", md: "18px", xl: "20px"}}>{title}</Text>
                <Text fontWeight={400} fontSize={{base: "12px", md: "14px", xl: "16px"}}>{description}</Text>
            </Box>
        </Flex>
    )
}

export default Card