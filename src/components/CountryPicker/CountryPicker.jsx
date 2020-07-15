import React, {useEffect, useState} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api'

const CountryPicker = (props) => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    const handleCountryChange = props.handleCountryChange;
    useEffect(() => {
        const fetchAPI = async () => {
            const list = await fetchCountries()
            setFetchedCountries(list);
            console.log(list, 'countries------list');
        }
        fetchAPI();
    }, [setFetchedCountries])
    
    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>) }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;