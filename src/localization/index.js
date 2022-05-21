import en_us from './en'
import fa_ir from './fa'

const lang = localStorage.getItem('lnag') ? localStorage.getItem('lang') : 'en'
export {lang}

const direction = {
    fa:'rtl',
    en:'ltr'
}

function getDirection(){
    return direction[lang]
}
export {getDirection}

const fonts = {
    fa:'Vazir',
    en:'Muli'
}
function getFont(){
    return fonts[lang]
}
export {getFont}

const translate = {
    en:en_us,
    fa:fa_ir
}
function getTranslate(){
    return translate[lang]
}
export {getTranslate}