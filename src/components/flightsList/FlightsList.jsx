import React, { useState, useEffect } from 'react';
import { Switch, Link, Route, BrowserRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import {
  departureListSelector,
  arrivalListSelector,
} from '../../flights.selectors';
import { getFlightsData } from '../../flights.actions';
import FlightInfo from './FlightInfo.jsx';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import './flightsList.scss';

const FlightsList = ({ getFlightsData }) => {
  const [departuresSelected, changeSelected] = useState(true);
  const [date, setDate] = useState(
    localStorage.getItem('flightsDate')
      ? new Date(localStorage.getItem('flightsDate'))
      : new Date('11 11 2021')
  );

  const departuresList = useSelector(state =>
    departureListSelector(state, date)
  );
  const arrivalsList = useSelector(state => arrivalListSelector(state, date));
  const isDataFetching = useSelector(state => state.isDataFetching);

  console.log(isDataFetching);

  const noFlights = (
    <tr>
      <td colSpan='6' className='no-flights'>
        No flights
      </td>
    </tr>
  );

  const showData = data =>
    data.length === 0
      ? noFlights
      : data.map(flightData => (
          <FlightInfo key={flightData.ID} flightData={flightData} />
        ));

  useEffect(() => {
    getFlightsData(date);
  }, [date]);

  return (
    <BrowserRouter>
      <div className='board'>
        <div className='buttons'>
          <Link
            className={`btn buttons__departures ${
              departuresSelected ? 'btn-selected' : ''
            }`}
            {...(!departuresSelected && {
              onClick: () => changeSelected(!departuresSelected),
            })}
            to='/'
          >
            <button>DEPARTURES</button>
          </Link>
          <Link
            className={`btn buttons__arrivals ${
              !departuresSelected ? 'btn-selected' : ''
            }`}
            {...(departuresSelected && {
              onClick: () => changeSelected(!departuresSelected),
            })}
            to='/arrivals'
          >
            <button>ARRIVALS</button>
          </Link>
        </div>
      </div>
      <div className='date-picker'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label='Choose your date'
            value={date}
            onChange={newValue => {
              setDate(new Date(newValue));
              localStorage.setItem('flightsDate', new Date(newValue));
            }}
            renderInput={params => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      {isDataFetching && <CircularProgress sx={{ marginTop: '36px' }} />}
      {!isDataFetching && (
        <table className='table'>
          <thead className='table__header'>
            <tr>
              <th>Terminal</th>
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Flight</th>
            </tr>
          </thead>
          <tbody className='table__body'>
            <Switch>
              <Route exact path='/'>
                {showData(departuresList)}
              </Route>
              <Route path='/arrivals'>{showData(arrivalsList)}</Route>
            </Switch>
          </tbody>
        </table>
      )}
    </BrowserRouter>
  );
};

const mapDispatch = {
  getFlightsData,
};

export default connect(null, mapDispatch)(FlightsList);
