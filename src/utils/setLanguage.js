import supportedLanguages from "../store/i18/supportedLanguages"
import setConfig from "./setConfig"

/**
 * Sets the language based on the selected language
 * Falls back to the browser language, if supported, or English if not
 * 
 * @param {function} dispatch 
 * @param {string} lang 
 */
const setLanguage = (dispatch, lang) => {
  if (lang) {
    setConfig(dispatch, lang)
    dispatch({ type: 'SET_LANG', payload: lang })
  }

  if (!lang) {
    const browserLang = navigator.language
    const lang = supportedLanguages.includes(browserLang) ? browserLang : 'en'

    setConfig(dispatch, lang)
    dispatch({ type: 'SET_LANG', payload: lang })
  }
}

export default setLanguage
