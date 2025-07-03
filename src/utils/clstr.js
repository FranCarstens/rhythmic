/**
 * Converts a parameter to a string of space-separated classes
 * 
 * @param {*} param - The parameter to convert
 * @returns {string} The string of space-separated classes
 */
export default (...args) => {
  if (!args.length) {
    return ''
  }

  const allClassNames = args.map(arg => {
    if (!arg) {
      return ''
    }

    if (Array.isArray(arg)) {
      return arg.filter(Boolean).join(' ')
    }

    if (typeof arg === 'string') {
      return arg.split(' ').filter(Boolean).join(' ')
    }

    if (typeof arg === 'object' && Object.keys(arg).length > 0) {
      return Object.keys(arg).filter(key => arg[key]).join(' ')
    }

    return ''
  })

  return allClassNames.join(' ')
}
