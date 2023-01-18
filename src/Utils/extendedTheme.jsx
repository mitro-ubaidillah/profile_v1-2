import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `'Plus Jakarta Sans', sans-serif`,
        body: `'Plus Jakarta Sans', sans-serif`,
    },
    colors: {
        primary: {
            dark: '#0A192F',
            light: '#D1D5DB',
            button: '#2652F4'
        },
        font: {
            dark: '#FFFFFF',
            optional: '#CCD6F6',
            light: '#0B2639'
        }

    }
})

export default theme;