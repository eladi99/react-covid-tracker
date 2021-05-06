import React from 'react';

export default function DataBoxes({ stats }) {
  function numberWithCommas(num) {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const {
    NewConfirmed: newConfirmed,
    TotalConfirmed: totalConfirmed,
    NewDeaths: newDeaths,
    TotalDeaths: totalDeaths,
  } = stats;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Box 1 - confirmed cases */}
      <div className="shadow-md bg-blue-100 p-10 text-center rounded">
        <h3 className="text-3xl text-blue-900 font-bold mb-4">Cases</h3>

        <div className="text-2xl mb-4">
          <span className="font-bold">New: </span>
          {numberWithCommas(newConfirmed)}
        </div>

        <div className="text-2xl mb-4">
          <span className="font-bold">Total: </span>
          {numberWithCommas(totalConfirmed)}
        </div>
      </div>

      {/* Box 2 - deaths */}
      <div className="shadow-md bg-blue-200 p-10 text-center rounded">
        <h3 className="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>

        <div className="text-2xl mb-4">
          <span className="font-bold">New: </span>
          {numberWithCommas(newDeaths)}
        </div>

        <div className="text-2xl mb-4">
          <span className="font-bold">Total: </span>
          {numberWithCommas(totalDeaths)}
        </div>
      </div>
    </div>
  );
}
