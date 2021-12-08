import React from 'react';
import Header from './header/Header.jsx';
import FlightsInput from './flightsInput/FlightsInput.jsx';
import FlightsList from './flightsList/FlightsList.jsx';

const Page = () => {
  return (
    <>
      <Header />
      <main className='page'>
        <FlightsInput />
        <FlightsList />
      </main>
    </>
  );
};

export default Page;
