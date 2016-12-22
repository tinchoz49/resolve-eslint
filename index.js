#!/usr/bin/env node
'use strict';

const findUp = require('find-up');
const argv = process.argv;
const lastArgument = argv.length === 3 ?
    argv[2] :
    argv.length > 3 ?
    argv[argv.length - 1] :
    null;

findUp('node_modules/.bin/eslint', {cwd: lastArgument}).then(filepath => {
    if (filepath) {
        require(filepath);
    } else {
        require('eslint/bin/eslint');
    }
});
