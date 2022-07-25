import {Flex, Drawer, DrawerContent, useDisclosure, useMediaQuery} from "@chakra-ui/react"
import SideBarContent from "./components/SideBarContent/SideBarContent";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import {useEffect} from "react";

const AppHeader = (): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const media = useMediaQuery("(min-width: 768px)")[0]

    useEffect(() => {
        if(media && isOpen){
            onClose()
        }
    }, [media, isOpen, onClose])

    return (
        <Flex w={"100%"} h={"100%"} px={{base: "20px", md: "80px"}} alignItems={"center"} justifyContent={"space-between"} gap={"50px"}>
            <HeaderContent mobile={false} onOpen={onOpen} onClose={onClose} display={{base: "none", md: "flex"}}/>
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SideBarContent onClose={onClose}/>
                </DrawerContent>
            </Drawer>
            <HeaderContent mobile={true} onOpen={onOpen} onClose={onClose} display={{base: "flex", md: "none"}}/>
        </Flex>
    );
};

export default AppHeader;