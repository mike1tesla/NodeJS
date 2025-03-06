const express = require('express');
const { getHomePage, getJustin } = require('../controllers/homeController')
const route = express.Router();   //route mapping truc tiep den express app

// routes.METHOD('/route', handler)
route.get('/', getHomePage)
route.get('/justin', getJustin)

module.exports = route; //export default 1 varialbe