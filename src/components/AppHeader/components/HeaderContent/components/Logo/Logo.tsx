import {Image} from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'

import logo from "../../../../../../assets/images/logo/logo.png"
import {NavLink} from "react-router-dom";

interface ILogoProps {
    mobile: boolean
    onOpen: () => void
}

const Logo = ({mobile, onOpen}: ILogoProps): JSX.Element => {

    const handlerOpenMenu = () => {
        onOpen()
    }

    return (
        <>
            {mobile && <HamburgerIcon
                pos={"absolute"}
                top={"50%"}
                transform={"translateY(-50%)"}
                left={"15px"}
                onClick={handlerOpenMenu}/>
            }
            <NavLink to={"/"}>
                <Image src={logo} h={{base: "45px", md: "70px"}}/>
            </NavLink>
        </>
    )
}

export default Logo