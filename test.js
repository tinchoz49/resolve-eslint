import test from 'ava';
import {exec} from 'child_process';

test.cb('should find the local bin in local-founded directory', t => {
    exec('node index.js fixtures/local-founded', (error, stdout) => {
        t.is(error, null);
        t.is(stdout, 'local-founded');
        t.end();
    });
});

test.cb('should find the local bin in local-founded/recursive directory', t => {
    exec('node index.js fixtures/local-founded/recursive', (error, stdout) => {
        t.is(error, null);
        t.is(stdout, 'local-founded');
        t.end();
    });
});

test.cb('should find the bin fallback installed by resolve-eslint', t => {
    exec('node index.js -v fixtures', (error, stdout) => {
        t.is(error, null);
        t.is(stdout[0], 'v');
        t.end();
    });
});
