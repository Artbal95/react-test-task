import {chakra} from "@chakra-ui/react";

export const Header = chakra("header", {
    baseStyle: {
        pos: "fixed",
        top: "0",
        zIndex: "1000",
        bgColor: "#FFF",
        w: "100%",
        h: {base: "56px", md: "80px"},
        boxShadow: "0 0px 30px 0px #585656"
    },
})

export default Header