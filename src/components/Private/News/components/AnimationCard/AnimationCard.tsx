import AnimationBox from "../../../../../theme/AnimationBox";
import Card from "../Card/Card";

interface IAnimationCardProps {
    id: number
    title: string
    description: string
    image: string
}

const AnimationCard = ({id, title, description, image}: IAnimationCardProps): JSX.Element => {
    return (
        <AnimationBox
            animate={{
                opacity: [0, .2, .4, .6, .8, 1],
                scale: [0, .2, .4, .6, .8, 1]
            }}
            transition={{
                duration: .8,
                ease: "linear",
                repeat: 0,
            }}
        >
            <Card id={id} title={title} description={description} image={image}/>
        </AnimationBox>
    )
}

export default AnimationCard