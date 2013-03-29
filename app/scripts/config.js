/**
 * Requrie config
 */
require.config({
    baseUrl: '.',
    paths: {
        underscore: 'lib/lodash',

        rAF: 'lib/rAF',
        events: 'lib/events'
    },
    shims: {
        events: {
            deps: ['underscore']
        },
    }
});