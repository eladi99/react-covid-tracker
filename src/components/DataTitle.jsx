import dayjs from 'dayjs';
import React from 'react';

export default function DataTitle({ text, dataDate }) {
  const timestamp = dayjs(dataDate).format('MMMM D YYYY, HH:mm:ss');

  return (
    <div>
      <h2 className="text-3xl font-bold">{text}</h2>
      <div className="text-2xl mt-4 mb-10">{timestamp}</div>
    </div>
  );
}
