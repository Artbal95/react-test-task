import {Box} from "@chakra-ui/react";
import RouterViews from "../routes";

const App = (): JSX.Element => {
    return (
        <Box>
            <Box as={"main"}>
                <RouterViews />
            </Box>
        </Box>
    )
}

export default App