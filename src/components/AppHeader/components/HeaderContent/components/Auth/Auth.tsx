import {Box, BoxProps} from "@chakra-ui/react";
import AuthButton from "../../../constants/AuthButtons/AuthButton";
import {useAppSelector} from "../../../../../../hooks";

interface IAuthProps extends BoxProps {
    onClose: () => void
}

const Auth = ({onClose, ...rest}: IAuthProps): JSX.Element => {

    const {isLoggedIn} = useAppSelector(state => state.auth)

    return (
        <Box {...rest}>
            <AuthButton signIn={isLoggedIn} onClose={onClose}/>
        </Box>
    )
}

export default Auth