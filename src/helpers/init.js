export const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
};
