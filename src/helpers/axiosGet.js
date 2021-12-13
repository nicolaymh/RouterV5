import axios from 'axios';
import { continents } from './continents';

export async function axiosGet() {
    const continentsList = continents();

    try {
        const response = await axios.all([...continentsList]);

        let continents = [
            { continent: 'africa', countries: null },
            { continent: 'americas', countries: null },
            { continent: 'asia', countries: null },
            { continent: 'europe', countries: null },
            { continent: 'oceania', countries: null },
        ];

        let newArray = continents.map((continent, index) => {
            return { ...continent, countries: [...response[index].data] };
        });

        return newArray;
    } catch (e) {
        console.warn(`Fallo: ${e}`);
        return false;
    }
}
