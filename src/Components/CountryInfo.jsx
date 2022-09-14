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
        <>
            <div className={`infoC `} >
                <button className="backBtn">
                    <Link to="/">&#8249;&#8249;</Link>
                </button>

                {country.map((country, index) => (
                    <div className="card" key={index}>
                        <div className="img">
                            <img src={country.flags.png} alt="img" />
                        </div>
                        <div className="content">
                            <h3>{country.name.common}</h3>
                            </div>

                            <div className="info">
                                    <div>population:{country.population}</div>
                                    <div>Region: {country.region}  </div>
                                    <div>capital: {country.capital} </div>
                                
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
