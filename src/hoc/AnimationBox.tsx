import {ReactNode} from "react"
import {chakra, ChakraProps} from '@chakra-ui/react';
import {motion, isValidMotionProp, AnimationControls, TargetAndTransition, VariantLabels} from 'framer-motion';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

interface IAnimationBoxProps extends ChakraProps{
    children: ReactNode
    animate: AnimationControls | TargetAndTransition | VariantLabels | boolean
    transition: any
}

const AnimationBox = ({children, animate, transition, ...rest}: IAnimationBoxProps): JSX.Element => {
    return (
        <ChakraBox
            {...rest}
            animate={animate}
            // @ts-ignore no problem in operation, although type error appears.
            transition={transition}
        >
            {children}
        </ChakraBox>
    )
}

export default AnimationBox