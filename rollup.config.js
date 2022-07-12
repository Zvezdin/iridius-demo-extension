export default [
    {
        input: 'src/js/detectDApp.js',
        output: [{
            file: 'dist/chrome/detectDApp.js',
            format: 'iife'
        }, {
            file: 'dist/edge/detectDApp.js',
            format: 'iife'
        }, {
            file: 'dist/firefox/detectDApp.js',
            format: 'iife'
        }]
    },
    {
        input: 'src/js/detectDAppFailing.js',
        output: [{
            file: 'dist/chrome/detectDAppFailing.js',
            format: 'iife'
        }, {
            file: 'dist/edge/detectDAppFailing.js',
            format: 'iife'
        }, {
            file: 'dist/firefox/detectDAppFailing.js',
            format: 'iife'
        }]
    },
    {
        input: 'src/js/background.js',
        output: [{
            file: 'dist/chrome/background.js',
            format: 'iife'
        }, {
            file: 'dist/edge/background.js',
            format: 'iife'
        }, {
            file: 'dist/firefox/background.js',
            format: 'iife'
        }]
    },
    {
        input: 'src/js/popup.js',
        output: [{
            file: 'dist/chrome/popup.js',
            format: 'iife'
        }, {
            file: 'dist/edge/popup.js',
            format: 'iife'
        }, {
            file: 'dist/firefox/popup.js',
            format: 'iife'
        }]
    }

];
