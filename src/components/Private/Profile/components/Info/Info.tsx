import {Flex} from "@chakra-ui/react";
import CustomInput from "../../../../constants/CustomInput/CustomInput";
import {useState} from "react";

const Info = (): JSX.Element => {

    const [info, setInfo] = useState({
        gender: "Male",
        Date: "06-09-1999",
        country: "Armenia",
        city: "Yerevan"
    })

    return (
        <Flex w={"100%"} alignItems={"center"} justifyContent={"center"} gap={"20px"} flexWrap={"wrap"}>
            {Object.entries(info).map(([key, value], index: number) => (
                <CustomInput
                    key={key + index}
                    defaultValue={value}
                    setValue={setInfo}
                    valueKey={key}
                    label={key}
                    flex={"1 1 300px"}
                />
            ))}
        </Flex>
    )
}

export default Info