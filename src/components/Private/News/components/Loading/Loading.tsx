import ReactLoading from "react-loading";
import {Center} from "@chakra-ui/react";

const Loading = (): JSX.Element => {
    return (
        <Center>
            <ReactLoading type={"bubbles"} width={"150px"} color={"cyan"}/>
        </Center>
    )
}

export default Loading