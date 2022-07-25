import {Button} from "@chakra-ui/react";
import {useAppDispatch} from "../../../../../hooks";
import {logoutEffect} from "../../../../../store/effects/auth.effect";

interface IGetStartProps {
    title?: string
}

const SignOut = ({title = "Sign Out"}: IGetStartProps): JSX.Element => {

    const dispatch = useAppDispatch()

    const handlerSignOut = () => {
        dispatch(logoutEffect())
    }

    return (
        <Button px={"25px"} onClick={handlerSignOut}>
            {title}
        </Button>
    )
}

export default SignOut