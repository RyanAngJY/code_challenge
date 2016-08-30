'use strict';

module.exports = {
        app: {
            name: 'Sloogle Pics',
            description: 'The greatest image search engine ever!',
            version: '1.0.0',
        },
        port: process.env.PORT || 8080,
        db: {
            host: 'ec2-54-243-207-190.compute-1.amazonaws.com',
            name: 'dba6tjm1losdj5',
            username: 'pwoofbjjtwnicv',
            password: 'KxPKHT2Ni1hUGQoJ0UGLB-ZUPF',
            port: '5432'
        }
    };