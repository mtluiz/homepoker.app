export const saveName = (name) => window.localStorage.setItem('username', name);
export const getName = () => window.localStorage.getItem('username');