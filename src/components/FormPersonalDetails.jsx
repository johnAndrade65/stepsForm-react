import * as C from "@chakra-ui/react"

const FormPersonalDetails = () => {
    return (
        <C.VStack spacing={5}>
            <C.Input placeholder="Full name" borderColor="blue.700"/>
            <C.Input placeholder="Social Security Number" borderColor="blue.700"/>
            <C.Input placeholder="Cell number" borderColor="blue.700"/>
        </C.VStack>
    )
}

export default FormPersonalDetails;