import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function CountryInfo({darkMode}) {
    const [country, setCountry] = useState([]);
    const { countryName } = useParams();
    useEffect(() => {
        const getCountryByName = async () => {
            const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
            const data = await res.json();
            setCountry(data);
        };

        getCountryByName();
    }, [countryName]);

    return (
        <div className={`${darkMode ? 'light-background' : 'dark-background'}`} >
            <div className={`infoC   `} >
                <button className="backBtn">
                    <Link to="/">&#8249;Back</Link>
                </button>

                {country.map((country, index) => (
                    <div className={`card ${darkMode ? 'light-elements' : 'dark-elements'}`} key={index}>
                        <div className="img">
                            <img src={country.flags.png} alt="img" />
                        </div>
                        <div className={`info ${darkMode ? 'light-elements' : 'dark-elements'}    `}>
                                     <h3 className={`${darkMode ? 'light-text' : 'dark-text'}   `}>{country.name.common}</h3>
                                    <div className={`${darkMode ? 'light-text' : 'dark-text'}     `}>population:{country.population}</div>
                                    <div className={`${darkMode ? 'light-text' : 'dark-text'}      `}>Region: {country.region}  </div> 
                                    <div className={`${darkMode ? 'light-text' : 'dark-text'}      `}>capital: {country.capital} </div>
                                </div>
                                
                        
                    </div>
                ))}
            </div>
        </div>
    )
}
