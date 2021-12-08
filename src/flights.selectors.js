export const departureListSelector = state => {
  const departures = state.flightsData.departure || [];
  return departures
    .slice()
    .filter(
      flight =>
        new Date(flight.timeDepShedule).getDate() === new Date().getDate()
    )
    .filter(flight =>
      flight.codeShareData[0].codeShare
        .toLowerCase()
        .includes(state.filterText.toLowerCase())
    );
};

export const arrivalListSelector = state => {
  const arrivals = state.flightsData.arrival || [];
  return arrivals
    .slice()
    .filter(
      flight =>
        new Date(flight.timeArrShedule).getDate() === new Date().getDate()
    )
    .filter(flight =>
      flight.codeShareData[0].codeShare
        .toLowerCase()
        .includes(state.filterText.toLowerCase())
    );
};
