/**
 * Converts an array of arguments to a string of space-separated classes
 * 
 * @param {string | object | array} args - The parameter to convert
 * @returns {string} A string of space-separated classNames
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
