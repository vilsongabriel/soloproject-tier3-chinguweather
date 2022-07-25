#!/usr/bin/env node
import parseArguments from './modules/arguments.js';
import fetchLocationData from './modules/location.js';
import fetchWeather from './modules/weather.js';
import formatResponse from './modules/response.js';
import appendToTracking from './modules/tracking.js';

const args = parseArguments(process.argv.slice(2));

const location = await fetchLocationData(args.location);
const weather = await fetchWeather(location.lat, location.lon);

const response = formatResponse(location, weather, args.units);

console.log(response);
appendToTracking(response);