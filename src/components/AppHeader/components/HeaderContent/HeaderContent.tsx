import {Flex, FlexProps} from "@chakra-ui/react";
import Logo from "./components/Logo/Logo";
import Auth from "./components/Auth/Auth";
import NavLinks from "../constants/NavLinks/NavLinks";

interface IHeaderContentProps extends FlexProps {
    mobile: boolean
    onOpen: () => void
    onClose: () => void
}

const HeaderContent = ({mobile, onOpen, onClose, ...rest}: IHeaderContentProps): JSX.Element => {
    return (
        <Flex pos={"relative"} w={"100%"} h={"100%"} alignItems={"center"} justifyContent={{base: "center", md: "space-between"}} gap={"50px"} {...rest}>
            <Logo mobile={mobile} onOpen={onOpen}/>
            <NavLinks onClose={onClose} display={mobile ? "none" : "flex"}/>
            <Auth display={mobile ? "none" : "block"} onClose={onClose}/>
        </Flex>
    )
}

export default HeaderContent