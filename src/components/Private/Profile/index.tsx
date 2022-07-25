import {Button, Flex} from "@chakra-ui/react";
import FullName from "./components/FullName/FullName";
import Info from "./components/Info/Info";

const Profile = (): JSX.Element => {
    return (
        <Flex
            flexDir={"column"}
            mx={"auto"}
            maxW={"1366px"}
            borderRadius={"15px"}
            bgColor={"#FFF"}
            boxShadow={"2px 2px 10px -3px #000"}
            p={"50px"}
            gap={"20px"}
        >
            <FullName/>
            <Info />
            <Button w={"100%"} ml={"auto"} maxW={"250px"}>
                Save
            </Button>
        </Flex>
    )
}

export default Profile