import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { searchFlights } from '../../flights.actions';
import './flightsInput.scss';

const FlightsInput = ({ searchFlights }) => {
  const [inputValue, changeValue] = useState('');

  const handleChange = e => {
    changeValue(e.target.value);
  };

  return (
    <div className='flight-input'>
      <h1 className='flight-input__title'>SEARCH FLIGHT</h1>
      <div className='flight-input__input-block seach-block'>
        <i className='seach-block__manifier'>
          <FontAwesomeIcon icon={faSearch} />
        </i>
        <input
          placeholder='Flight #'
          type='text'
          value={inputValue}
          name='flight-number'
          className='seach-block__input'
          onChange={handleChange}
        />
        <button
          onClick={() => searchFlights(inputValue)}
          className='seach-block__button'
        >
          Search
        </button>
      </div>
    </div>
  );
};

const mapDispatch = {
  searchFlights,
};

export default connect(null, mapDispatch)(FlightsInput);
