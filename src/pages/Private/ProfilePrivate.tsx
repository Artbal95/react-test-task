import Container from "../../hoc/Container";
import Profile from "../../components/Private/Profile";

const ProfilePrivate = (): JSX.Element => {
    return (
        <Container pt={"50px"}>
            <Profile />
        </Container>
    );
};

export default ProfilePrivate;