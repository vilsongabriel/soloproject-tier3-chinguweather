import got from 'got';
import 'dotenv/config';
import handleError from './error.js';

const env = process.env;

export default async function fetchLocationData(location) {
    try {
        const { features } = await got(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${env.MAPBOX_TOKEN}`, {
            timeout: {
                request: 10000
            },
            retry: {
                calculateDelay: ({computedValue}) => {
                    return computedValue / 10;
                }
            }
        }).json();

        if (features.length === 0) {
            handleError('Location not found.')
        }

        return {
            name: features[0].place_name,
            lon: features[0].center[0],
            lat: features[0].center[1]
        }
    } catch (error) {
        handleError('Failed to fetch geolocation data.')
    }
}