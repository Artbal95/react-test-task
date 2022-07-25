import {ListProps, UnorderedList} from "@chakra-ui/react";
import Links from "./components/Links/Links";
import links from "../../links";

interface INavLinksProps extends ListProps {
    onClose: () => void
}

const NavLinks = ({onClose, ...rest}: INavLinksProps): JSX.Element => {
    return (
        <UnorderedList listStyleType={"none"} display={"flex"} alignItems={"center"} flex={"1 1 auto"} gap={"15px"} {...rest}>
            {links.map(({name, path}, index) => (
                <Links key={name + index + path} path={path} name={name} onClose={onClose}/>
            ))}
        </UnorderedList>
    )
}

export default NavLinks