import {
  FLIGHTS_DATA_RECIEVED,
  SEARCH_FLIGHTS,
  FLIGHTS_DATA_FETCHING,
} from './flights.actions.js';

const initData = {
  flightsData: [],
  filterText: '',
  isDataFetching: true,
};

const flightsReduser = (state = initData, action) => {
  switch (action.type) {
    case FLIGHTS_DATA_FETCHING:
      return {
        ...state,
        isDataFetching: true,
      };

    case FLIGHTS_DATA_RECIEVED:
      return {
        ...state,
        flightsData: action.payload,
        isDataFetching: false,
      };

    case SEARCH_FLIGHTS:
      return {
        ...state,
        filterText: action.payload,
      };

    default:
      return state;
  }
};

export default flightsReduser;
