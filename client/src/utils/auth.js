export const getStoredAuthToken = () => {
    return localStorage.getItem('authToken');
}

export const storeAuthToken = (token) => {
    localStorage.setItem('authToken', token);
}

export const removeStoredAuthToken = () => {
    localStorage.removeItem('authToken');
}

export const storeUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const getStoredUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const removeStoredUser = () => {
    localStorage.removeItem('user');
}