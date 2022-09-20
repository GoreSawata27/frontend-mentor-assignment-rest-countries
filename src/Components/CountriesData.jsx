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
            <div className={`bodyy  `}>
            <SearchInput onSearch={getCountryByName} />
            <FilterContries onSelect={getCountryByRegion} />
            <div className={`grid  `}>
                {
                    countries.map((country) => (
                        <>
                            <div className={`card ${darkMode ? 'dark-background' : 'light-background'} `} >
                                <div className={`${darkMode ? 'dark-background' : 'light-background'}`}>
                                <Link to={`/country/${country.name.common}`}>
                                    <div className="img  ">

                                        <img className={``} src={country.flags.png} alt="img" />
                                    </div>
                                </Link>
                                </div>
                                <div className={`info ${darkMode ? 'dark-background' : 'light-background'}   `}>
                                     <h3 className={`${darkMode ? 'dark-background' : 'light-background'}   `}>{country.name.common}</h3>
                                    <div className={`  `}>population:{country.population}</div>
                                    <div className={`    `}>Region: {country.region}  </div> 
                                    <div className={`    `}>capital: {country.capital} </div>
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
