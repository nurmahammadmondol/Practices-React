import { useState } from 'react';
import './country.css';

const SingleCountry = ({ country, handleVisited, handleCountryFlags }) => {
  // console.log(handleVisited);
  const { name, flags, population, area } = country;

  const [Visited, setVisited] = useState(false);
  const VisitedCountry = () => {
    setVisited(!Visited);
  };

  return (
    <div className="country">
      <img className="Flags" src={flags.png} alt="" />
      <h4>Country Name : {name.common}</h4>
      <p>Population :{population}</p>
      <p>Area : {area}</p>
      <button onClick={VisitedCountry} className="Button">
        {Visited ? 'visited' : 'Going'}
      </button>
      {Visited ? 'I have visited this country' : 'I want to visit'}

      <br />
      <button onClick={() => handleVisited(country)} className="Button">
        Visited Country Name
      </button>
      <button onClick={() => handleCountryFlags(country)} className="Button">
        Visited Country Flags
      </button>
    </div>
  );
};

export default SingleCountry;
