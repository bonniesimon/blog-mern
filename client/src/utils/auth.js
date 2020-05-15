export const getStoredAuthToken = () => {
    return localStorage.getItem('authToken');
}

export const storeAuthToken = (token) => {
    localStorage.setItem('authToken', token);
}

export const removeStoredAuthToken = () => {
    localStorage.removeItem('authToken');
}

export const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const getUser = () => {
    return JSON.parce(localStorage.getItem('user'));
}