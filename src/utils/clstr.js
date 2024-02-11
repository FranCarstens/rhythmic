export default (param) => {
  if (Array.isArray(param)) {
    return param.filter(Boolean).join(' ')
  }

  if (typeof param === 'string') {
    return param.split(' ').filter(Boolean).join(' ')
  }

  if (typeof param === 'object' && Object.keys(param).length > 0) {
    return Object.keys(param).filter(key => param[key]).join(' ')
  }

  return ''
}
