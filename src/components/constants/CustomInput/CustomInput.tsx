import {Flex, FlexProps, Input, Text} from "@chakra-ui/react";

interface ICustomInputProps extends FlexProps{
    defaultValue: string
    valueKey: string
    setValue: (state: (prevState: any) => any) => void
    label: string
    placeholder?: string
}

const CustomInput = ({defaultValue, setValue, valueKey, label, placeholder, ...rest}: ICustomInputProps): JSX.Element => {

    const handlerChangeValue = (value: string) => {
        setValue((prevState) => ({
            ...prevState,
            [valueKey]: value
        }))
    }

    return (
        <Flex w={"100%"} flexDir={"column"} gap={{base: "5px", md: "10px"}} {...rest}>
            <Text textTransform={"capitalize"} fontWeight={500} fontSize={{base: "14px", md: "16px", xl: "18px"}}>{label}</Text>
            <Input
                size={{base: "sm", md: "md", xl: "lg"}}
                fontSize={{base: "14px", md: "16px", xl: "18px"}}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={(event) => handlerChangeValue(event.currentTarget.value)}
            />
        </Flex>

    )
}

export default CustomInput