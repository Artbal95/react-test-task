import {Box, Text} from "@chakra-ui/react";

const Title = (): JSX.Element => {
    return (
        <Box>
            <Text fontSize={{base: "18px", md: "20px", xl: "22px"}} mb={"10px"} textAlign={"center"}>
                Login to your Web App
            </Text>
            <Text fontSize={{base: "14px", md: "16px", xl: "18px"}} color={"#888"} textAlign={"center"}>
                Use your email to sign in.
            </Text>
        </Box>
    )
}

export default Title