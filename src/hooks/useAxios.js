import axios from 'axios';

export async function useAxios(api = '') {
    try {
        const response = await axios({
            url: api,
            method: 'GET',
        });

        return response;
    } catch (e) {
        return false;
    }
}
