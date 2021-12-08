import React, { useState, useEffect } from 'react';
import './flightsList.scss';
import FlightInfo from './FlightInfo.jsx';
import { connect } from 'react-redux';
import { getFlightsData } from '../../flights.actions';
import {
  departureListSelector,
  arrivalListSelector,
} from '../../flights.selectors';
import { Switch, Link, Route, BrowserRouter } from 'react-router-dom';

const FlightsList = ({
  getFlightsData,
  departuresList = [],
  arrivalsList = [],
}) => {
  const [departuresSelected, changeSelected] = useState(true);

  useEffect(() => {
    getFlightsData();
  }, []);

  const noFlights = (
    <tr>
      <td colSpan='6' className='no-flights'>
        No flights
      </td>
    </tr>
  );

  const buttons = departuresSelected ? (
    <>
      <Link className='btn btn-selected buttons__departures' to='/'>
        <button>DEPARTURES</button>
      </Link>
      <Link
        onClick={() => changeSelected(false)}
        className='btn buttons__arrivals'
        to='/arrivals'
      >
        <button>ARRIVALS</button>
      </Link>
    </>
  ) : (
    <>
      <Link
        onClick={() => changeSelected(true)}
        className='btn buttons__departures'
        to='/'
      >
        <button>DEPARTURES</button>
      </Link>
      <Link className='btn btn-selected  buttons__arrivals' to='/arrivals'>
        <button>ARRIVALS</button>
      </Link>
    </>
  );

  return (
    <BrowserRouter>
      <div className='board'>
        <div className='buttons'>{buttons}</div>
      </div>
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
              {departuresList.length === 0
                ? noFlights
                : departuresList.map(flightData => (
                    <FlightInfo key={flightData.ID} flightData={flightData} />
                  ))}
            </Route>
            <Route path='/arrivals'>
              {arrivalsList.length === 0
                ? noFlights
                : arrivalsList.map(flightData => (
                    <FlightInfo key={flightData.ID} flightData={flightData} />
                  ))}
            </Route>
          </Switch>
        </tbody>
      </table>
    </BrowserRouter>
  );
};

const mapState = state => {
  return {
    departuresList: departureListSelector(state),
    arrivalsList: arrivalListSelector(state),
  };
};

const mapDispatch = {
  getFlightsData,
};

export default connect(mapState, mapDispatch)(FlightsList);
