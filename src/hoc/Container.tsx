import {ReactNode} from "react";
import {Box, BoxProps} from "@chakra-ui/react";
import ScrollTheme from "../theme/ScrollTheme";

interface IContainerProps extends BoxProps{
    children: ReactNode
}

const Container = ({children, ...rest}: IContainerProps): JSX.Element => {
    return (
        <Box
            flexDir={"column"}
            w={"100%"}
            h={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={{base: "50px", md: "80px"}}
            px={"10px"}
            py={{base: "50px", md: "80px"}}
            overflow={"auto"}
            sx={ScrollTheme}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default Container