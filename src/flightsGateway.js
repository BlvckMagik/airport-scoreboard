import moment from 'moment';

const baseUrl = `https://api.iev.aero/api/flights`;

export const fetchFlights = (date = new Date()) => {
  return fetch(`${baseUrl}/${moment(new Date(date)).format('D-MM-YYYY')}`).then(
    response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to load data');
      }
    }
  );
};
