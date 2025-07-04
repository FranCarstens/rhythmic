/**
 * Sets the selected language help and UI state
 * 
 * @param {function} dispatch 
 * @param {string} lang 
 */
const setConfig = (dispatch, lang) => {
  import(`../language/${lang}/getLang.js`).then((getLang) => {
    const languageFiles = getLang.default()

    dispatch({ type: 'LANG', help: languageFiles.help })
    dispatch({ type: 'I18', i18: JSON.parse(languageFiles.i18) })
  })
}

export default setConfig
