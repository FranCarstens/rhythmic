/**
 * alias for localStorage.setItem with JSON.stringify, also updates 'saving' state
 * 
 * @param {string} key 
 * @param {*} value 
 * @param {function} setSaving 
 */
export const save = (key, value, setSaving) => {
  localStorage.setItem(key, JSON.stringify(value));
  setSaving(true);
  setTimeout(() => {
    setSaving(false);
  }, 500);
};

/**
 * alias for localStorage.getItem with JSON.parse
 * 
 * @param {string} key 
 */
export const load = (key) => {
  const data = JSON.parse(localStorage.getItem(key));

  return data
}

/**
 * alias for localStorage.removeItem
 * 
 * @param {string} key 
 */
export const remove = (key) => {
  localStorage.removeItem(key);
}