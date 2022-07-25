import {Text} from "@chakra-ui/react";
import AnimationBox from "../../../../../theme/AnimationBox";

interface ITitleProps {
    title?: string
}

const Title = ({title = "Hello World"}: ITitleProps): JSX.Element => {
    return (
        <AnimationBox
            animate={{
                scale: [.2, .8, 1, 1, 1, 1, 1, 1, 1, .2],
                rotate: [0, 360, 360, 360, 360, 360, 360, 360, 360, 0],
            }}
            transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            }}
        >
            <Text
                fontSize={"50px"}
                textAlign={"center"}
            >
                {title}
            </Text>
        </AnimationBox>
    )
}

export default Title