function converToCelsius(kevin) {
    return (kevin - 273.15).toFixed(2);
}
function converToFahrenheit(kevin) {
    return (1.8 * (kevin - 273) + 32).toFixed(2);
}
export default function formatTemperature(kevin, units) {
    return ({
        'celsius'    : converToCelsius(kevin) + 'C',
        'fahrenheit' : converToFahrenheit(kevin) + 'F',
        'both'       : converToCelsius(kevin) + 'C or ' + converToFahrenheit(kevin) + 'F'
    })[units];
}