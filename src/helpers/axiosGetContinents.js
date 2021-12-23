import axios from 'axios';
import { continents } from './continents';

export async function axiosGetContinents() {
    const continentsList = continents();

    try {
        const response = await axios.all([...continentsList]);

        // console.log(response);

        let continents = [
            { id: 'continent-africa', continent: 'Africa', countries: [] },
            { id: 'continent-america', continent: 'America', countries: [] },
            { id: 'continent-asia', continent: 'Asia', countries: [] },
            { id: 'continent-europe', continent: 'Europe', countries: [] },
            { id: 'continent-oceania', continent: 'Oceania', countries: [] },
        ];

        let newArray = continents.map((continent, index) => {
            return { ...continent, countries: [...response[index].data] };
        });

        // console.log(newArray);

        return newArray;
    } catch (e) {
        console.warn(`Fallo: ${e}`);
        return false;
    }
}
