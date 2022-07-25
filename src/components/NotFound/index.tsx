import {Button, Flex, Text} from "@chakra-ui/react"
import {useNavigate} from "react-router-dom";

interface INotFoundProps {
    title: string
    path: string
}

const NotFound = ({title, path}: INotFoundProps): JSX.Element => {

    const navigate = useNavigate()

    return (
        <Flex px={"30px"} flexDir={"column"} alignItems={"center"} justifyContent={"center"} gap={{base: "30px", md: "50px"}}>
            <Text w={"100%"} maxW={"420px"} textAlign={"center"} fontSize={{base: "16px", md: "20px", xl: "24px"}}>{title}</Text>
            <Button
                w={"100%"}
                maxW={"320px"}
                fontWeight={700}
                fontSize={{base: "16px", md: "18px", xl: "20px"}}
                px={{base: "25px", md: "35px"}}
                onClick={() => navigate(path)}
            >
                Go To
            </Button>
        </Flex>
    );
};

export default NotFound;