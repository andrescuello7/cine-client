export const getStorageArray = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

export const setStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const TraerSesion = (key) => JSON.parse(localStorage.getItem(key)) || [];

export const SubirSesion = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const TraerCuenta = (key) => JSON.parse(localStorage.getItem(key)) || [];

export const SubirCuentaStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
