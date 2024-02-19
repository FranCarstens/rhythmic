export const save = (key, value, setSaving) => {
  localStorage.setItem(key, JSON.stringify(value));
  setSaving(true);
  setTimeout(() => {
    setSaving(false);
  }, 500);
};

export const load = (key) => {
  const data = JSON.parse(localStorage.getItem(key));

  return data
}

export const remove = (key) => {
  localStorage.removeItem(key);
}