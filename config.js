'use strict';

module.exports = {
        app: {
            name: 'Sloogle Pics',
            description: 'The greatest image search engine ever!',
            version: '1.0.0',
        },
        port: process.env.PORT || 8080,
        db: {
            host: '<YOUR HOST URL>',
            name: '<YOUR DB NAME>',
            username: '<YOUR USERNAME>',
            password: '<YOUR PASSWORD>'
        }
    };