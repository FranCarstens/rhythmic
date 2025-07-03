import isPlainObject from '@/utils/isPlainObject'

/**
 * Removes a specified property from an object
 * 
 * @param {object} obj - The object from which a property needs to be removed
 * @param {string} key - The key of the property to be removed
 * @returns A new object with the specified `key` removed
 */
export const removeProperty = (obj, key) => {
  // eslint-disable-next-line no-unused-vars
  const { [key]: deleted, ...rest } = obj

  return rest
}

/**
 * Removes specified keys from an object.
 * 
 * @param {object} obj - The object from which the properties need to be removed
 * @param {string[]} keys - The keys of the properties which need to be removed
 * @returns A new object with the specified keys removed
 */
export const removeProperties = (obj, keys) => {
  return keys.reduce((a, key) => {
    return a
      ? removeProperty(a, key)
      : removeProperty(obj, key)
  }, null)
}

/**
 * Recursively removes specified properties from deeply nested objects
 *
 * @param {object} obj - The object from which deep properties need to be removed
 * @param {string[]} keys - The keys of the properties which need to be removed
 * @returns A new object with the specified keys removed from all its entire structure
 */
export const removeDeepProperties = (obj, keys) => {
  return Object.fromEntries(
    Object.entries(obj)
      .reduce((a, [k, v]) => {
        const cleanedObj = isPlainObject(v)
          ? removeDeepProperties(removeProperties(v, keys), keys)
          : v

        return [...a, [k, cleanedObj]]
      }, [])
  )
}
