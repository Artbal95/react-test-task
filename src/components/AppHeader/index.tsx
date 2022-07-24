import {Box, ChakraProps} from "@chakra-ui/react"

interface IAppHeaderProps extends ChakraProps {
    [key: string]: any
}

const AppHeader = (props: IAppHeaderProps): JSX.Element => {
    const {} = props
    return (
         <Box>
            Hello AppHeader
         </Box>
    );
};

export default AppHeader;