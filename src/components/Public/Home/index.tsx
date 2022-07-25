import {Flex} from "@chakra-ui/react"
import Title from "./components/Title/Title";
import GetStart from "./components/GetStart/GetStart";
import Description from "./components/Description/Description";

const Home = (): JSX.Element => {
    return (
        <Flex
            w={"100%"}
            h={"100%"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={{base: "50px", md: "80px"}}
        >
            <Title/>
            <Description/>
            <GetStart/>
        </Flex>
    );
};

export default Home;