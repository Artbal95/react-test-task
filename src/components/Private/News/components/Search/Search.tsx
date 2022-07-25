import {Input} from "@chakra-ui/react";

interface ISearchProps {
    defaultValue: string
    setValue: (value: string) => void
    placeholder?: string
}

const Search = ({defaultValue, setValue, placeholder = "Search News"}: ISearchProps): JSX.Element => {

    const handlerChange = (value: string) => {
        setValue(value)
    }

    return (
        <Input
            defaultValue={defaultValue}
            size={{base: "sm", md: "md", xl: "lg"}}
            fontSize={{base: "14px", md: "16px", xl: "18px"}}
            placeholder={placeholder}
            onChange={(event) => handlerChange(event.currentTarget.value)}
        />
    )
}

export default Search