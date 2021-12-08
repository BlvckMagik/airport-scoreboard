import { fetchFlights } from './flightsGateway';

export const FLIGHTS_DATA_RECIEVED = 'FLIGHTS_DATA_RECIEVED';
export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';

export const flightsDataRecieved = flightsData => {
  return {
    type: FLIGHTS_DATA_RECIEVED,
    payload: flightsData,
  };
};

export const searchFlights = filterText => {
  return {
    type: SEARCH_FLIGHTS,
    payload: filterText,
  };
};

export const getFlightsData = () => {
  return function (dispatch) {
    fetchFlights().then(flightsData =>
      dispatch(flightsDataRecieved(flightsData.body))
    );
  };
};
