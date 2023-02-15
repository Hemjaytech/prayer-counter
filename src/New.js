import React, { useState } from 'react';

const New = () => {
  const [astagfirullah, setAstagfirullah] = useState(0);
  const handleAstagfirullah = () => {
    setAstagfirullah(astagfirullah + 1);
  };

  const [subhanallah, setSubhanallah] = useState(0);
  const handleSubhanallah = () => {
    setSubhanallah(subhanallah + 1);
  };

  const [alhamdulilah, setAlhamdulilah] = useState(0);
  const handleAlhamdulilah = () => {
    setAlhamdulilah(alhamdulilah + 1);
  };

  const [allahakbar, setAllahakbar] = useState(0);
  const handleAllahakbar = () => {
    setAllahakbar(allahakbar + 1);
  };

  const [newPrayer, setNewPrayer] = useState(0);
  const handleNewPrayer = (prayer) => {
    setNewPrayer(prayer);
  };

  const reset = () => {
    setAllahakbar(0);
    setAstagfirullah(0);
    setSubhanallah(0);
    setAlhamdulilah(0);
    setNewPrayer(0);
  };

  return (
    <div>
      <div className='container'>
        <h1>Prayer Counter</h1>
        <br />
        <div className='prayer'>
          <h3>Astagfirullah</h3>
          {astagfirullah}
          <button className='btn' onClick={handleAstagfirullah}>
            Count
          </button>
        </div>
        <div className='prayer'>
          <h3>Subhanallah</h3>
          {subhanallah}
          <button className='btn' onClick={handleSubhanallah}>
            Count
          </button>
        </div>
        <div className='prayer'>
          <h3>Alhamdulilah</h3>
          {alhamdulilah}
          <button className='btn' onClick={handleAlhamdulilah}>
            Count
          </button>
        </div>
        <div className='prayer'>
          <h3>Allahu-akbar</h3>
          {allahakbar}
          <button className='btn' onClick={handleAllahakbar}>
            Count
          </button>
        </div>
        {newPrayer !== 0 && (
          <div className='prayer'>
            <h3>{newPrayer.name}</h3>
            {newPrayer.count}
            <button className='btn' onClick={newPrayer.handleClick}>
              Count
            </button>
          </div>
        )}
        <div className='total'>
          Total:
          {alhamdulilah +
            subhanallah +
            astagfirullah +
            allahakbar +
            count +
            counter}
          <button className='resetBtn' onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default New;
