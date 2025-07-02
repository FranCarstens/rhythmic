/**
 * Sets the selected language help and UI state
 * 
 * @param {function} dispatch 
 * @param {string} lang 
 */
const setConfig = (dispatch, lang) => {
  const help = `../store/help/${lang}.md?raw`
  const i18 = `../store/i18/${lang}.js`

  import(help).then((module) => {
    dispatch({ type: 'LANG', help: module.default })
  })

  import(i18).then((module) => {
    dispatch({ type: 'I18', i18: module.default })
  })
}

export default setConfig
