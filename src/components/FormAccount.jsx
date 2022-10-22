import * as C from "@chakra-ui/react"

const FormAccount = () => {
    return (
        <C.VStack spacing={5}>
            <C.Input type="email" placeholder="E-mail" borderColor="blue.700" required/>
            <C.Input type="email" placeholder="Confirm your e-mail" borderColor="blue.700"/>
            <C.Input type="password" placeholder="Password" borderColor="blue.700"/>
        </C.VStack>
    )
}

export default FormAccount;