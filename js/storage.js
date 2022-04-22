const getLocalStorageItem = (key, deleteOnError = true) => {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.error(err);
    if (deleteOnError) window.localStorage.removeItem(key);
    return null;
  }
};

const setLocalStorageItem = (key, data) => {
  try {
    const stringifiedData = JSON.stringify(data);
    window.localStorage.setItem(key, stringifiedData);
    return true;
  } catch (err) {
    console.error(err);
    return null;
  }
};

window.getLocalStorageItem = getLocalStorageItem;
window.setLocalStorageItem = setLocalStorageItem;