import { extendTheme } from '@chakra-ui/react'
import React from 'react'

export const theme = extendTheme({
    styles: {
        global: {
            "html , body" : {
                fontSize: "20px",
                fontFamily: "Poppins"
            }
        },
    },
})