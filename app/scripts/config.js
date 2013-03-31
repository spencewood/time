/**
 * Requrie config
 */
require.config({
    baseUrl: 'scripts/',
    paths: {
        underscore: 'lib/lodash',

        rAF: 'lib/rAF',
        events: 'lib/events'
    },
    shim: {
        events: {
            deps: ['underscore']
        }
    }
});