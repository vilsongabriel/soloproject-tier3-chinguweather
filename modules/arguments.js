import handleError from "./error.js";

export default function parseArguments (args) {
    let hasUnit = false;

    const config = {
        location: '',
        units: 'both'
    }

    if (args.length < 1) {
        handleError('At least one arg (location) is required.');
    }

    if (args[0][0] === '-') {
        handleError('The first arg must be the location');
    } else {
        config.location = encodeURI(args[0]);
    }

    if (args.includes('-celsius') || args.includes('-c')) {
        config.units = 'celsius';
    }

    if (args.includes('-fahrenheit') || args.includes('-f')) {
        config.units = 'fahrenheit';
    }

    return config;
}