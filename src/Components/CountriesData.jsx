import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import FilterContries from './FilterContries';
import SearchInput from './SearchInput';
import Head from "./Head";

export default function CountriesData({darkMode}) {
    const [countries, setCountries] = useState([]);



    const getAllCountries = async () => {
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await res.json();
        setCountries(data);
    };
    useEffect(() => {
        getAllCountries();
    }, []);

    const getCountryByName = async (countryName) => {
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await res.json();
        setCountries(data);
    };

    const getCountryByRegion = async (regionName) => {
        const res = await fetch(`https://restcountries.com/v3.1/region/${regionName}`);
        const data = await res.json();
        setCountries(data);
    };
    return (
        <>
            <Head />
            <div className="bodyy">
            <SearchInput onSearch={getCountryByName} />
            <FilterContries onSelect={getCountryByRegion} />
            <div className={`grid  `}>
                {
                    countries.map((country) => (
                        <>
                            <div className={`${darkMode ? 'dark-background' : 'light-background'} card  `}  >
                                <Link to={`/country/${country.name.common}`}>
                                    <div className="img">

                                        <img src={country.flags.png} alt="img" />
                                    </div>
                                </Link>
                                <div className={`${darkMode ? 'dark-background' : 'light-background'}`}>
                                <div className={`content  ${darkMode ? 'dark-background' : 'light-background'} ${darkMode ? 'dark-text' : 'light-text'}`}>
                                    <h3>{country.name.common}</h3>
                                </div>
                                <div className={`info ${darkMode ? 'dark-background' : 'light-background'}`}>
                                    <div className={` ${darkMode ? 'dark-text' : 'light-text'}`}>population:{country.population}</div>
                                    <div className={` ${darkMode ? 'dark-text' : 'light-text'}`}>Region: {country.region}  </div> 
                                    <div className={` ${darkMode ? 'dark-text' : 'light-text'}`}>capital: {country.capital} </div>
                                </div>
                                </div>
                            </div>

                        </>
                    )

                    )
                }
            </div>
            </div>

        </>
    )
}
