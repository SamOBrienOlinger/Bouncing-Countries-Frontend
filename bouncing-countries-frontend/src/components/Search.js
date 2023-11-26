import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`);
      const countryData = response.data[0];
      setCountryInfo({
        capital: countryData?.capital || 'N/A',
        population: countryData?.population || 'N/A',
        currencies: countryData?.currencies || {},
        continents: countryData?.continents || [],
        languages: countryData?.languages || [],
        flag: countryData?.flags?.svg || '', // Assuming flag information is available in the API
      });
    } catch (error) {
      console.error('Error fetching country data:', error);
      setCountryInfo(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <div className="input-button-container">
        <input
          type="text"
          placeholder="Enter country name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {countryInfo && !loading ? (
        <div className="country-container">
          <p>
            <span>Capital:</span> {countryInfo.capital || 'N/A'}
          </p>
          <p>
            <span>Population:</span> {countryInfo.population || 'N/A'}
          </p>
          <p>
            <span>Currency:</span>{' '}
            {Object.keys(countryInfo.currencies || {}).map((currencyCode) => {
              const currency = countryInfo.currencies[currencyCode];
              return (
                <span key={currencyCode}>
                  {currencyCode} ({currency?.name || 'Unknown Name'}){' '}
                  {currency?.symbol && `(${currency.symbol})`}
                </span>
              );
            }) || 'N/A'}
          </p>
          <p>
            <span>Languages:</span>{' '}
            {countryInfo.languages.length > 0
              ? countryInfo.languages.join(', ')
              : 'N/A'}
          </p>
          {countryInfo.flag && (
            <div>
              <span>Flag:</span>
              <img src={countryInfo.flag} alt="Flag" width="50" height="30" />
            </div>
          )}
          <p>
            <span>Continent:</span> {countryInfo.continents?.[0] || 'N/A'}
          </p>
        </div>
      ) : null}
      {loading && <p className="loading">Loading...</p>}
    </div>
  );
};

export default Search;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [country, setCountry] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`);
//       setCountry(response.data[0]);
//     } catch (error) {
//       console.error('Error fetching country data:', error);
//       setCountry(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="search-container">
//       <div className="input-button-container">
//         <input
//           type="text"
//           placeholder="Enter country name"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {country && !loading ? (
//         <div className="country-container">
//           <p>
//             <span>Capital:</span> {country.capital || 'N/A'}
//           </p>
//           <p>
//             <span>Population:</span> {country.population || 'N/A'}
//           </p>
//           <p>
//             <span>Currency:</span>{' '}
//             {Object.keys(country.currencies || {}).map((currencyCode) => {
//               const currency = country.currencies[currencyCode];
//               return (
//                 <span key={currencyCode}>
//                   {currencyCode} ({currency?.name || 'Unknown Name'}){' '}
//                   {currency?.symbol && `(${currency.symbol})`}
//                 </span>
//               );
//             }) || 'N/A'}
//           </p>
//           <p>
//             <span>Continent:</span> {country.continents?.[0] || 'N/A'}
//           </p>
//         </div>
//       ) : null}
//       {loading && <p className="loading">Loading...</p>}
//     </div>
//   );
// };

// export default Search;