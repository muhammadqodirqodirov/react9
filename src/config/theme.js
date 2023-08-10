import { createTheme } from "@mui/material/styles";
import { COLORS } from "./colors";


export const  theme = createTheme({
    breakpoints:{
        values:{
            xs:0,
            sm:576,
            md:768,
            lg:1240,
        },
    },
    typography:{
        fontFamily: ['Josefin Sans'].join(""),
        h1:{
            color: '#000',
            fontSize: '53px',
            fontWeight: 700,
            lineHeight: '0%',
            letterSpacing: '0.795px',
        },
        h2:{
            color: '#1A0B5B',
            fontSize: '42px',
            fontWeight: 700,
        },
        h3:{
            color: '#151875',
            fontSize: '22px',
            fontWeight: 600,
        },
        body1:{
            color:  '#8A8FB9',
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "28px",
        },
        body2:{
            color: "rgba(26, 11, 91, 0.30)",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: '25.6px',
        }, 
    },
    palette:{
        primary:{
            main: COLORS.primary,
            contrastText: COLORS.white,
        },
        secondary:{
            main:COLORS.secondary,
            contrastText: COLORS.white,
        }
    }
})