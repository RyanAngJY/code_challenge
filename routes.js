/**
 * Server Routes
 * 
 * Add routes as you need them
 * 
 */

'use strict';

module.exports = function (app) {
    var configController = require('./controllers/config.js');

    app.route('/api/config')
        .get(configController.get);

    app.route('/').get(function(req, res){
        res.render('index.ejs');
    });

};