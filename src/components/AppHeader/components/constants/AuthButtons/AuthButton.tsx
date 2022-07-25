import {Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {logoutEffect} from "../../../../../store/effects/auth.effect";
import {useAppDispatch, useAppSelector} from "../../../../../hooks";

interface IAuthButtonProps {
    signIn: boolean
    onClose: () => void
}

const AuthButton = ({signIn, onClose}: IAuthButtonProps): JSX.Element => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {loadingLogin} = useAppSelector(state => state.auth)

    const handlerClickAuthButton = () => {
        if(signIn){
            onClose()
            dispatch(logoutEffect())
            if(!loadingLogin){
                navigate("/")
            }
        }else{
            onClose()
            navigate("/login")
        }
    }

    return (
        <Button onClick={handlerClickAuthButton} colorScheme={"cyan"}>
            {signIn ? "Sign Out" : "Sign In"}
        </Button>
    )
}

export default AuthButton