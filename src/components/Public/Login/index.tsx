import {Button, Flex} from "@chakra-ui/react";
import Title from "./components/Title/Title";
import Notification from "./components/Notification/Notification";
import {useState} from "react";
import {LoginType} from "../../../types";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {loginEffect} from "../../../store/effects/auth.effect";
import CustomInput from "../../constants/CustomInput/CustomInput";

const Login = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const {loadingLogin} = useAppSelector(state => state.auth)

    const [form, setForm] = useState<LoginType>({
        email: "admin",
        password: "123456"
    })

    const [error, setError] = useState<boolean>(false)

    const handlerSubmit = () => {
        if(form.email === "admin" && form.password === "123456"){
            setError(false)
            dispatch(loginEffect(form))
        }else{
            setError(true)
        }
    }


    return (
        <Flex w={"100%"} h={"100%"} alignItems={"center"} justifyContent={"center"}>
            <Flex
                alignItems={"center"}
                justifyContent={"center"}
                flexDir={"column"}
                flex={"1 1 260px"}
                maxW={{base: "260px", md: "420px"}}
                p={"15px"}
                gap={"15px"}
                borderRadius={"15px"}
                bgColor={"#FFF"}
                boxShadow={"5px 5px 10px -7px #000"}
            >
                <Title />
                <Notification error={error}/>
                <CustomInput
                    defaultValue={form.email}
                    valueKey={"email"}
                    setValue={setForm}
                    label={"Email"}
                />
                <CustomInput
                    defaultValue={form.password}
                    valueKey={"password"}
                    setValue={setForm}
                    label={"Password"}
                />
                <Button
                    w={"100%"}
                    py={"5px"}
                    fontSize={{base: "14px", md: "16px", xl: "18px"}}
                    variant={"solid"}
                    colorScheme={"cyan"}
                    color={"#000"}
                    isLoading={loadingLogin}
                    onClick={handlerSubmit}
                >
                    Login
                </Button>
            </Flex>
        </Flex>
    )
}

export default Login