import axios from 'axios';
import { continents } from './continents';

export async function axiosGet() {
    const continentsList = continents();

    try {
        const response = await axios.all([...continentsList]);

        let continents = [
            { id: 'continent-africa', continent: 'africa', countries: [] },
            { id: 'continent-america', continent: 'america', countries: [] },
            { id: 'continent-asia', continent: 'asia', countries: [] },
            { id: 'continent-europe', continent: 'europe', countries: [] },
            { id: 'continent-oceania', continent: 'oceania', countries: [] },
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
