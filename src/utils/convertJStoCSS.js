
export const jsKeyToCssProperty = (key) => key
  .replace(/([A-Z])/g, (capital) => `-${capital[0].toLowerCase()}`)

export const jsEntriesToCssBlock = (js) => Object
  .entries(js)
  // eslint-disable-next-line no-unused-vars
  .filter(([k, v]) => v !== undefined)
  .reduce((a, [k, v]) => a + `${jsKeyToCssProperty(k)}:${v};`, '{')
  .concat('}')

export const jsObjToCss = (js, prefix = '') => {
  const cssString = Object
    .entries(js)
    .reduce((a, [k, v]) => a + `${prefix ? prefix + ' ' : ''}${k}` + jsEntriesToCssBlock(v), '')

  return cssString
}
