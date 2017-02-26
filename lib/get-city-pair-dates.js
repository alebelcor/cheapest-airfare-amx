'use strict';

module.exports = options => {
  let cityPairDates = `${options.originAirport}_${options.destinationAirport}_${options.departureDate}`;

  if (options.returnDate) {
    cityPairDates += `.${options.destinationAirport}_${options.originAirport}_${options.returnDate}`;
  }

  return cityPairDates;
};
