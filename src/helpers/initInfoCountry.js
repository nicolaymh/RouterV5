export const initInfoCountry = () => {
    return JSON.parse(localStorage.getItem('infoCountry')) || '';
};
