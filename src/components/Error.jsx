import React from 'react';

export default function Error() {
  return (
    <main>
      <div className="bg-red-500 rounded text-white text-center shadow-md m-10 py-6">
        <p className="text-3xl md:text-4xl font-bold">
          Failed to retrieve data from API
        </p>
        <p className="text-xl mt-3">Please try again later.</p>
      </div>
    </main>
  );
}
