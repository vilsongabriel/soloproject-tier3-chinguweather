import chalk from 'chalk';
import {capitalcase, titlecase} from 'stringcase';
import formatTemperature from './units.js';

export default function formatResponse(location, weather, units) {
    const kevin_temperature = weather[0].main.temp;
    const temperature = formatTemperature(kevin_temperature, units);

    const current_condition = titlecase(weather[0].weather[0].description);
    const next_condition = capitalcase(weather[1].weather[0].description);

    return `
        Current temperature in ${chalk.yellow(location.name)} is ${chalk.yellow.bold.underline(temperature)}.
        Conditions are currently: ${chalk.green(current_condition)}.
        What you should expect: ${chalk.blue(next_condition + ' throughout the day')}.
    `;
}