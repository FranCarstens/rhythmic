import supportedLanguages from "../store/i18/supportedLanguages"

export const setLanguage = (dispatch, lang) => {
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

export const setConfig = (dispatch, lang) => {
  const help = `../store/help/${lang}.md?raw`
  const i18 = `../store/i18/${lang}.js`

  import(help).then((module) => {
    dispatch({ type: 'LANG', help: module.default })
  })

  import(i18).then((module) => {
    dispatch({ type: 'I18', i18: module.default })
  })
}