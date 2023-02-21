import React, { useState } from 'react';

const Prayers = () => {
  const [prayer, setPrayer] = useState('');
  const [prayerCount, setPrayerCount] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    const prayerCountValue = prayer;
    setPrayerCount(prayerCountValue);
  };

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

  const [prayerCounter, setPrayerCounter] = useState(0);
  const handlePrayerCounter = () => {
    setPrayerCounter(prayerCounter + 1);
  };

  const reset = () => {
    setAllahakbar(0);
    setAstagfirullah(0);
    setSubhanallah(0);
    setAlhamdulilah(0);
    setPrayerCounter(0);
  };

  return (
    <div>
      <div className='container'>
        <h1>Prayer Counter</h1>
        <>
          <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
              <label>
                <h4>Add your Dua: </h4>
              </label>
              <input
                type='text'
                value={prayer}
                required
                onChange={(e) => setPrayer(e.target.value)}
              />
            </div>

            <button
              type='submit'
              className='btn btn-block'
              onClick={handleClick}
            >
              Add
            </button>
          </form>
        </>
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
        {prayer && (
          <div className='prayer'>
            <h3>{prayerCount}</h3>
            <div className='prayclass'>{prayerCounter}</div>
            <button className='btn' onClick={handlePrayerCounter}>
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
            prayerCounter}
          <button className='resetBtn' onClick={reset}>
            Reset
          </button>
        </div>
      </div>

      <div className='footer'>
        <small> With love</small> <br /> The Hemjay
      </div>
    </div>
  );
};

export default Prayers;
