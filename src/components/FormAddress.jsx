import * as C from "@chakra-ui/react"

const FormAddress = () => {
    return (
        <C.VStack spacing={5}>
            <C.Input placeholder="Where do you live?" borderColor="blue.700"/>
            <C.Input placeholder="Road" borderColor="blue.700"/>
            <C.Input placeholder="Zip code" borderColor="blue.700"/>
        </C.VStack>
    )
}

export default FormAddress;