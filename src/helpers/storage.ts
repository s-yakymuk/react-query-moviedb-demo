const STORAGE_KEY = "reactQueryExample";

interface Storage {
  name: "sessionStorage" | "localStorage";
  data: { [key: string]: any };
  isAvailable: boolean;
}

const storageLocal: Storage = {
  name: "localStorage",
  data: {},
  isAvailable: false,
};

const storageSession: Storage = {
  name: "sessionStorage",
  data: {},
  isAvailable: false,
};

function init(isSession = false) {
  const storage = isSession ? storageSession : storageLocal;

  // Test support
  try {
    storage.isAvailable =
      storage.name in window && window[storage.name] !== null;
  } catch (e) {
    // no throw
  }

  // Restore values
  if (storage.isAvailable) {
    try {
      storage.data =
        JSON.parse(window[storage.name].getItem(STORAGE_KEY) || "") || {};
    } catch (e) {
      storage.data = {};
    }
  }
}

function save(isSession = false) {
  const { name, data, isAvailable } = isSession ? storageSession : storageLocal;

  if (isAvailable) {
    try {
      window[name].setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // no throw
    }
  }
}

init(true);
init(false);

export const get = (key = "", defaultValue?: any, isSession = false) => {
  const { data } = isSession ? storageSession : storageLocal;

  return key in data ? data[key] : defaultValue;
};

export const set = (key = "", value?: any, isSession = false) => {
  const { data } = isSession ? storageSession : storageLocal;
  const oldValue = data[key];

  data[key] = value;

  save(isSession);

  return oldValue;
};
