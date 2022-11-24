export const departureListSelector = (state, date) => {
  const departures = state.flightsData.departure || [];
  return departures
    .slice()
    .filter(
      flight =>
        new Date(flight.timeDepShedule).getDate() === new Date(date).getDate()
    )
    .filter(flight =>
      flight.codeShareData[0].codeShare
        .toLowerCase()
        .includes(state.filterText.toLowerCase())
    );
};

export const arrivalListSelector = (state, date) => {
  const arrivals = state.flightsData.arrival || [];
  return arrivals
    .slice()
    .filter(
      flight =>
        new Date(flight.timeArrShedule).getDate() === new Date(date).getDate()
    )
    .filter(flight =>
      flight.codeShareData[0].codeShare
        .toLowerCase()
        .includes(state.filterText.toLowerCase())
    );
};
