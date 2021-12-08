import { FLIGHTS_DATA_RECIEVED, SEARCH_FLIGHTS } from './flights.actions.js';

const initData = {
  flightsData: [],
  filterText: '',
};

const flightsReduser = (state = initData, action) => {
  switch (action.type) {
    case FLIGHTS_DATA_RECIEVED:
      return {
        ...state,
        flightsData: action.payload,
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
