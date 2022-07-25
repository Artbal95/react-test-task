import {ListItem} from "@chakra-ui/react";
import {NavLink, useLocation} from "react-router-dom";
import {RoutesTypes} from "../../../../../../../types";
import {useAppSelector} from "../../../../../../../hooks";

interface ILinksProps extends Omit<RoutesTypes, "meta" | "component"> {
    onClose: () => void
}

const Links = ({name, path, onClose}: ILinksProps): JSX.Element => {

    const location = useLocation()

    const {isLoggedIn} = useAppSelector(state => state.auth)

    return (
        <ListItem
            fontSize={{md: "16px", xl: "20px"}}
            fontWeight={location.pathname === path || location.pathname === path + "home" ? 600 : 400}
            color={"#5a5d76"}
        >
            <NavLink to={isLoggedIn && path === "/home" ? path : path} onClick={onClose}>
                {name}
            </NavLink>
        </ListItem>
    )
}

export default Links