import {Box} from "@chakra-ui/react";
import RouterViews from "../routes";
import AppHeader from "../components/AppHeader";
import {Header} from "../hoc/Header";
import Main from "../hoc/Main";
import ScrollTheme from "../theme/ScrollTheme";

const App = (): JSX.Element => {
    return (
        <Box>
            <Header>
                <AppHeader />
            </Header>
            <Main sx={ScrollTheme}>
                <RouterViews />
            </Main>
        </Box>
    )
}

export default App