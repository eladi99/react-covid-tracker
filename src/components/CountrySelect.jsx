import React from 'react';

export default function CountrySelect({ countries, handleCountryChanged }) {
  return (
    <select
      className="form-select mt-10 block w-full border p-3 rounded"
      onChange={(e) => handleCountryChanged(e.target.value)}
    >
      <option key="0" value="0">
        Select country
      </option>

      {countries.map((country) => {
        return (
          <option key={country.ID} value={country.ID}>
            {country.Country}
          </option>
        );
      })}
    </select>
  );
}
