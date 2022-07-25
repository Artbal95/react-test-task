import {extendTheme} from "@chakra-ui/react";
import breakpoints from "./Breakpoints";

const theme = extendTheme({
    breakpoints,
    components: {
        Button: {
            baseStyle: {
                px: "25px",
                fontWeight: 'bold',
                _active: {
                    transform: "translateY(2px)",
                    transition: ".1s"
                }
            },
            variants: {
                'with-shadow': {
                    bgColor: "gray.200",
                    boxShadow: '0 0 5px 0px gray',
                },
            },
            defaultProps: {
                size: 'md', // default is md
                variant: 'with-shadow', // default is solid
                colorScheme: 'gray', // default is gray
            },
        },
    }
})

export default theme