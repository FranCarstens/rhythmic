const isPlainObject = (value) => {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export default isPlainObject