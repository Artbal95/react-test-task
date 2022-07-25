import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {NavLink} from "react-router-dom";

interface IBreadCrumbsProps {
    title: string
}

const BreadCrumbs = ({title}: IBreadCrumbsProps) => {
    return (
        <Breadcrumb
            spacing={"8px"}
            separator={<ChevronRightIcon color='gray.500' />}
            bgColor={"#FFF"}
            boxShadow={"2px 2px 10px -3px #000"}
            p={{base: "15px 25px", md: "20px 30px"}}
            borderRadius={"15px"}
        >
            <BreadcrumbItem fontWeight={700} fontSize={{base: "18px", md: "20px"}}>
                <BreadcrumbLink as={NavLink} to={"/news"}>News</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem fontWeight={700} fontSize={{base: "18px", md: "20px"}} isCurrentPage>
                <BreadcrumbLink as={NavLink} to={"#"}>{title}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default BreadCrumbs