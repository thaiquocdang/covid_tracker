import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    let changableUrl = url;
    if(country){
        changableUrl = `${url}/countries/${country}`;
    }
    try {

        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changableUrl);

        // const modifiedData = {confirmed, recovered, deaths, lastUpdate};
        // return modifiedData;

        // console.log('fetch data', modifiedData);

        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error){
        console.log(error);
    }
}


export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);

        // console.log(data, 'fetchDailyData');

        const modifiedData = data.map((dailyData) =>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        // console.log(modifiedData, 'modifiedData');
        return modifiedData
    }catch(error){

    }
}

export const fetchCountries = async () => {
    try {

        const response = await axios.get(`${url}/countries`);
        // console.log(response,'response');
        // console.log(response.data,'response . data');
        const countriesList = response.data.countries.map((country) => country.name);
        // console.log(countriesList, 'fetchCountries Test');

        return countriesList;

    } catch(error){

    }
}