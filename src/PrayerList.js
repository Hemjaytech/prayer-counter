import React from 'react';

const PrayerList = (props) => {
  const duas = props.duas;
  return (
    <div>
      {duas.map((dua) => (
        <div className='dua-preview' key={dua.id}>
          <h3>{dua.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default PrayerList;
