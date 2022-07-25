import got from 'got';
import 'dotenv/config';
import handleError from './error.js';

const env = process.env;

export default async function fetchWeather(lat, lon) {
    try {
        const data = await got(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${env.OPENWEATHER_KEY}`, {
            timeout: {
                request: 10000
            },
            retry: {
                calculateDelay: ({computedValue}) => {
                    return computedValue / 10;
                }
            }
        }).json();

        return data.list;
    } catch (error) {
        handleError('Failed to fetch weather data.')
    }
}