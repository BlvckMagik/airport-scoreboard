import { fetchFlights } from './flightsGateway';

export const FLIGHTS_DATA_RECIEVED = 'FLIGHTS_DATA_RECIEVED';
export const FLIGHTS_DATA_FETCHING = 'FLIGHTS_DATA_FETCHING';
export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';

export const flightsDataRecieved = flightsData => {
  return {
    type: FLIGHTS_DATA_RECIEVED,
    payload: flightsData,
  };
};

export const flightsDataFetching = () => {
  return {
    type: FLIGHTS_DATA_FETCHING,
  };
};

export const searchFlights = filterText => {
  return {
    type: SEARCH_FLIGHTS,
    payload: filterText,
  };
};

export const getFlightsData = date => {
  return function (dispatch) {
    dispatch(flightsDataFetching());
    fetchFlights(date).then(flightsData =>
      dispatch(flightsDataRecieved(flightsData.body))
    );
  };
};
