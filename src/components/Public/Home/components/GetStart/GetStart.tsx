import {Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

interface IGetStartProps {
    title?: string
}

const GetStart = ({title = "Get Started"}: IGetStartProps): JSX.Element => {

    const navigate = useNavigate()

    return (
        <Button px={"25px"} onClick={() => navigate("/login")}>
            {title}
        </Button>
    )
}

export default GetStart