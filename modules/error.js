import chalk from 'chalk';

const log = console.error;

export default function handleError(message) {
    log(chalk.bgRed.bold('ERROR: ' + message));
    process.exit();
}