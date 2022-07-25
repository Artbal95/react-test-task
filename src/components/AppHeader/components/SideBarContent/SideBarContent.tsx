import {Box, Flex} from "@chakra-ui/react";
import NavLinks from "../constants/NavLinks/NavLinks";
import {useAppSelector} from "../../../../hooks";
import AuthButton from "../constants/AuthButtons/AuthButton";

interface ISideBarContentProps {
    onClose: () => void
}

const SideBarContent = ({onClose}: ISideBarContentProps): JSX.Element => {

    const {isLoggedIn} = useAppSelector(state => state.auth)

    return (
        <Flex flexDir={"column"} gap={"40px"}>
            <NavLinks onClose={onClose} alignItems={"flex-start"} flexDir={"column"} p={"50px 0 0 40px"}/>
            <Box textAlign={"center"}>
                <AuthButton signIn={isLoggedIn} onClose={onClose}/>
            </Box>
        </Flex>
    )
}

export default SideBarContent