# cheapest-airfare-amx

>️ Get the cheapest airfare of an [Aeroméxico](https://aeromexico.com) flight

[![Build Status](https://img.shields.io/travis/alebelcor/cheapest-airfare-amx/master.svg)](https://travis-ci.org/alebelcor/cheapest-airfare-amx)

## Install

Ensure you have [Node.js](https://nodejs.org) version 4+ installed.

```bash
npm install --save alebelcor/cheapest-airfare-amx
```

An npm package is intentionally not provided.

## Usage

```js
const cheapestAirfareAmx = require('cheapest-airfare-amx');

const options = {
  from: 'TIJ',
  to: 'MEX',
  departure: '2017-05-10',
  return: '2017-05-20'
};

fn(options).then(result => {
  console.log(result);
  //=> { total: 2398, source: 'https://aeromexico.com/es-mx/reserva/opciones?itinerary=TIJ_MEX_2017-05-10.MEX_TIJ_2017-05-20&leg=1&travelers=A1_C0_I0_PH0_PC0' }
}); 
```

## API

### cheapestAirfareAmx(options)

Returns a Promise for a result object with a `total` property (lowest total) and a `source` property (for more information).

#### options

Type: `object`

An object representing the parameters for the search.

##### from

Type: `string`

Origin airport IATA code.

##### to

Type: `string`

Destination airport IATA code.

##### departure

Type: `string`

Departure date in `YYYY-MM-DD`.

##### return _(optional)_

Type: `string`

Return date in `YYYY-MM-DD`. Leave out if it's a one-way flight.

## Related

* [amx-tracker](https://github.com/alebelcor/amx-tracker) - Track changes in [Aeroméxico](https://aeromexico.com) fare prices through the command-line
* [cheapest-airfare-viv](https://github.com/alebelcor/cheapest-airfare-viv) - Get the cheapest airfare of a [VivaAerobus](https://www.vivaaerobus.com) flight
* [cheapest-airfare-voi](https://github.com/alebelcor/cheapest-airfare-voi) - Get the cheapest airfare of a [Volaris](https://www.volaris.com) flight

## License

MIT © Alejandro Beltrán

## Disclaimer

This was made for illustrative purposes.
I do not own the content generated by this tool.
All rights belong to their respective owners.
No copyright infringement intended.
