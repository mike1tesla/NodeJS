const path = require('path');
const express = require('express');

const viewEngineConfig = (app) => {
    app.set('views', path.join('./src' + '/views')); // lay ra duong dan TUONG DOI
    app.set('view engine', 'ejs');

    app.use(express.static(path.join('./src' + "/public"))); //config static file
}

module.exports = viewEngineConfig;