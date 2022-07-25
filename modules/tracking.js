import fs from 'fs';
import stripAnsi from 'strip-ansi';
import chalk from 'chalk';

export default function appendToTracking(text) {
    try {
        fs.appendFileSync('weather.txt', stripAnsi(text));
        console.log(`        ${chalk.italic('Weather was added to your weather tracking file, weather.txt')}
        `);
    } catch (error) {
        console.log(`        ${chalk.red.bold.italic('Failure to add to your weather tracking file.')}
        `);
    }
}