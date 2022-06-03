#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { URL } from 'node:url';

const {
    bin,
    description,
    version
} = JSON.parse(readFileSync(new URL('./package.json', import.meta.url).pathname));

const name = Object.keys(bin)[0];

import { program } from 'commander';

// Define the program options/arguments...
program
    .name(name)
    .description(description)
    .version(version)
    .option('-b, --background', 'limit the test to background colors')
    .option('-t, --text', 'limit the test to text colors')
    .arguments('[message]', 'a message to print with the colors');
// ... and parse it
program.parse();

// Get the program options
const options = program.opts();

// Define an empty color map...
let colors = {};
// ... and grab the text/background color maps
import { text, background } from './colors.js';

// If the background flag has not been used, add text colors to the color map
if (!options.background || options.text) colors = { ...colors, ...text };

// If the text flag has note been used, add background colors to the color map
if (!options.text || options.background) colors = { ...colors, ...background };

// For each entry in the color map,...
Object.entries(colors).forEach(([name, color]) => {
    // ... console log a defined message, or its name, using the color
    console.log(color(program.args[0] || name));
});
