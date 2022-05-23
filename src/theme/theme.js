import { createTheme } from '@mui/material/styles';
import palette from './palette';
import { getDirection, getFont } from '../localization/index'

const theme = createTheme({
    palette: palette,
    direction: getDirection(),
    spacing: 2.5,
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: "3.2857rem",
            lineHeight: '4rem',
            fontFamily: getFont(),
            color:'#fff'
        },
        h2: {
            fontWeight: 700,
            fontSize: "2.57rem",
            lineHeight: '3.2857rem',
            fontFamily: getFont(),
            color:'#fff'
        },
        h3: {
            fontWeight: 600,
            fontSize: "2rem",
            lineHeight: '2.7rem',
            fontFamily: getFont(),
            color:'#fff'
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.71rem",
            lineHeight: '2.43rem',
            fontFamily: getFont(),
            color:'#fff'
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.43rem",
            lineHeight: '2.14rem',
            fontFamily: getFont(),
            color:'#fff'
        },
        h6: {
            fontWeight: 600,
            fontSize: "1.14rem",
            lineHeight: '1.857rem',
            fontFamily: getFont(),
            color:'#fff'
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: "1.25rem",
            lineHeight: '2rem',
            fontFamily: getFont(),
            marginTop: 15
        },
        body1: {
            fontSize: getDirection() === 'rtl' ? 16 : 18,
            lineHeight: '1.8rem',
            color: '#a4acc4',
            fontFamily: getFont(),
            fontWeight: 400,
            textAlign: getDirection() === 'rtl' ? 'justify' : 'left',
        },
        body2:{
            fontSize: '.94rem',
            color: '#a4acc4',
            fontFamily: getFont(),
            fontWeight: 600,
            textAlign:'center'
        },
        button: {
            fontSize: '0.9rem',
            color: '#FFF',
            fontFamily: getFont(),
            fontWeight: 400,
        }
    }
})

export default theme