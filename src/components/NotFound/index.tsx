import {Box, ChakraProps} from "@chakra-ui/react"

interface INotFoundProps extends ChakraProps {
    [key: string]: any
}

const NotFound = (props: INotFoundProps): JSX.Element => {
    const {} = props
    return (
         <Box>
            Hello NotFound
         </Box>
    );
};

export default NotFound;