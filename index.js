#!/usr/bin/env node

import chalk from 'chalk';

const output  = [
    chalk.bold('bold'),
    chalk.dim('dim'),
    chalk.italic('italic'),
    chalk.inverse('inverse'),
    chalk.strikethrough('strikethrough'),
    chalk.black('black'),
    chalk.red('red'),
    chalk.green('green'),
    chalk.yellow('yellow'),
    chalk.blue('blue'),
    chalk.magenta('magenta'),
    chalk.cyan('cyan'),
    chalk.white('white'),
    chalk.gray('gray'),
    chalk.bgBlack('bgBlack'),
    chalk.black.bgRed('bgRed'),
    chalk.black.bgGreen('bgGreen'),
    chalk.black.bgYellow('bgYellow'),
    chalk.bgBlue('bgBlue'),
    chalk.black.bgMagenta('bgMagenta'),
    chalk.black.bgCyan('bgCyan'),
    chalk.black.bgWhite('bgWhite')
];

output.forEach(message => console.log(message));
