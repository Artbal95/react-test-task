import {Box, Text} from "@chakra-ui/react";

interface INotificationProps {
    error: boolean
}

const Notification = ({error}: INotificationProps): JSX.Element => {
    return (
        <>
            <Box
                w={"fit-content"}
                fontSize={{base: "12px", md: "14px"}}
                textAlign={"center"}
                bgColor={"cyan.500"}
                p={{base: "5px 10px", md: "10px 15px"}}
                borderRadius={"10px"}
            >
                <Text>For user with "admin" role use</Text>
                <Text fontWeight={700}>"admin / 123456"</Text>
                <Text>For user with "admin" role use</Text>
            </Box>
            {error && <Text fontWeight={500} fontSize={{base: "12px", md: "14px"}} color={"red.500"}>The username or password you entered is incorrect</Text>}
        </>
    )
}

export default Notification