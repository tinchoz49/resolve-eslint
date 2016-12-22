#!/usr/bin/env node

'use strict';

const findUp = require('find-up');
const argv = process.argv;
const lastArgument = argv.length === 3 ?
    argv[2] :
    argv.length > 3 ?
    argv[argv.length - 1] :
    null;

const filepath = findUp.sync('node_modules/eslint/bin/eslint.js', {cwd: lastArgument});
if (filepath) {
    require(filepath);
} else {
    require('eslint/bin/eslint');
}
