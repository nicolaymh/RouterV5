export const initUser = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
};
