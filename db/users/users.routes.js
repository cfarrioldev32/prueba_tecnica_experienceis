const { userSearch} = require('./users.controllers.js');
const UsersRoutes = require('express').Router();

UsersRoutes.post('/search', userSearch)

module.exports = {UsersRoutes}