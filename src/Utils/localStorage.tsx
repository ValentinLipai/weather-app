const getFromLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return typeof value === 'string' ? value : "";
}

const setToLocalStorage = (key: string, data: string) => {
    localStorage.setItem(key, data);
}
