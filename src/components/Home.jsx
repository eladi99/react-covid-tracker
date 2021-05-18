import React, { useState } from 'react';
import hourglass from '../hourglass.gif';
import useCovidData from '../reducers/useCovidData';
import CountrySelect from './CountrySelect';
import DataBoxes from './DataBoxes';
import DataTitle from './DataTitle';
import Error from './Error';

const GLOBAL = 'Global';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(GLOBAL);

  const { loading, error, dataDate, globalData, countriesData } =
    useCovidData();

  function countryChanged(countryID) {
    const country = countriesData.find((c) => c.ID === countryID);
    console.log('Selected country', country?.Country || GLOBAL);
    setSelectedCountry(country?.Country || GLOBAL);
  }

  if (error) return <Error />;

  return loading ? (
    <main className="flex flex-col align-center justify-center text-center">
      <div className="text-gray-500 text-3xl mt-10 mb-6">Fetching data</div>
      <img src={hourglass} alt="Loading..." className="w-24 m-auto" />
    </main>
  ) : (
    <main>
      <DataTitle dataDate={dataDate} text={selectedCountry} />
      <DataBoxes
        stats={
          selectedCountry === GLOBAL
            ? globalData
            : countriesData.find((c) => c.Country === selectedCountry)
        }
      />

      <CountrySelect
        countries={countriesData}
        handleCountryChanged={countryChanged}
      />

      {selectedCountry !== GLOBAL && (
        <button
          className="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600"
          onClick={() => setSelectedCountry(GLOBAL)}
        >
          Clear country
        </button>
      )}
    </main>
  );
}
