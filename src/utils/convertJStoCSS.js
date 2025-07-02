/**
 * Converts a JavaScript key to a CSS property
 * 
 * @param {string} key - The JavaScript key
 * @returns {string} The CSS property
 */
export const jsKeyToCssProperty = (key) => key
  .replace(/([A-Z])/g, (capital) => `-${capital[0].toLowerCase()}`)

/**
 * Converts a JavaScript object to a CSS block
 * 
 * @param {Object} js - The JavaScript object
 * @returns {string} The CSS block
 */
export const jsEntriesToCssBlock = (js) => Object
  .entries(js)
  // eslint-disable-next-line no-unused-vars
  .filter(([k, v]) => v !== undefined)
  .reduce((a, [k, v]) => a + `${jsKeyToCssProperty(k)}:${v};`, '{')
  .concat('}')

/**
 * Converts a JavaScript object to a CSS string
 * 
 * @param {Object} js - The JavaScript object
 * @param {string} prefix - The prefix to add to the CSS string
 * @returns {string} The CSS string
 */
export const jsObjToCss = (js, prefix = '') => {
  const cssString = Object
    .entries(js)
    .reduce((a, [k, v]) => a + `${prefix ? prefix + ' ' : ''}${k}` + jsEntriesToCssBlock(v), '')

  return cssString
}
