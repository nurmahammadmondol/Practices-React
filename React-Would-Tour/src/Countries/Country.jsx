import { useEffect } from 'react';
import { useState } from 'react';
import SingleCountry from './SingleCountry';
import './country.css';

const Country = () => {
  const [country, setCountry] = useState([]);
  const [visitCountry, setVisitCountry] = useState([]);
  const [visitCountryFlags, setVisitCountryFlags] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountry(data));
  }, []);

  const handleVisited = country => {
    const newVisitedItem = [...visitCountry, country];
    setVisitCountry(newVisitedItem);
  };

  const handleVisitedCountryFlags = countryDetails => {
    const Flags = [...visitCountryFlags, countryDetails];
    setVisitCountryFlags(Flags);
  };

  return (
    <div>
      {/* Visited Country  */}
      <h3>Visited Country :{visitCountry.length}</h3>
      <div className="VisitedContainer">
        <ol>
          {visitCountry.map(countryName => (
            <li>{countryName.name.common}</li>
          ))}
        </ol>
      </div>

      {/* Visited Country Name & Flags */}
      <div className="VisitedFlagsContainer">
        {visitCountryFlags.map(flags => (
          <img src={flags.flags.png}></img>
        ))}
      </div>

      <h3>Country :{country.length}</h3>

      <div className="countryContainer">
        {country.map(serialCountry => (
          <SingleCountry
            country={serialCountry}
            handleVisited={handleVisited}
            handleCountryFlags={handleVisitedCountryFlags}
          ></SingleCountry>
        ))}
      </div>
    </div>
  );
};

export default Country;
