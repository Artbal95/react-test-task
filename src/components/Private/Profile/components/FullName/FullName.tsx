import {Flex} from "@chakra-ui/react";
import CustomInput from "../../../../constants/CustomInput/CustomInput";
import {useState} from "react";

const FullName = (): JSX.Element => {

    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: ""
    })

    return (
        <Flex w={"100%"} alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"} gap={"15px"}>
            <CustomInput
                defaultValue={fullName.firstName}
                setValue={setFullName}
                valueKey={"firstName"}
                label={"First Name"}
                placeholder={"Enter First Name"}
                flex={"1 1 300px"}
            />
            <CustomInput
                defaultValue={fullName.lastName}
                setValue={setFullName}
                valueKey={"lastNAme"}
                label={"Surname"}
                placeholder={"Enter Surname"}
                flex={"1 1 300px"}
            />
        </Flex>
    )
}

export default FullName