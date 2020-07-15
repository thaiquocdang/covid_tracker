// import React from 'react';
// import '/App.module.css'

// class App extends React.Component{
    //     render(){
        //         return (
            //             <div className="container">
            //                 <h1>Covid Tracker App</h1>
            //                 <Cards />
            //                 <Chart />
            //                 <CountryPicker />
            //             </div>
            //         )
            //     }
            // }
            
            // export default App;
            
import React, {useEffect, useState} from 'react'
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData, fetchCountries} from './api'
import coronaImage from './image/image.png'

 function App() {

    const [data, setData] = useState(null);
    const [country, setCountry] = useState('')

    
    useEffect(() => {
        async function fetchMyAPI(){
            const data = await fetchData();
            // console.log(data, 'fetchData');
            setData(data)
        }
        fetchMyAPI()

        // async function fetchCountryData(){
        //     const countries = await fetchCountries();
        //     console.log(countries);
        //     setCountry(countries, 'countries at APP')
        // }
        // fetchCountryData()
    }, []);


    const handleCountryChange = async (country) => {
        // console.log(country, 'handleCOuntryChange');
        const fetchedData = await fetchData(country);
        // console.log(fetchedData, 'data of ' + country);
        setCountry(country);
        setData(fetchedData)
        
    }
    return (
        <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
    )
}

export default App;
