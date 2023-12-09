const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');

const jwtSecret = process.env.JWT_SECRET;
console.log('JWT Secret: ', jwtSecret);

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ["HS256"]
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

router
    .route('/login')
    .post(authController.login)
    .catch((err) => console.error(err));

router
    .route('/register')
    .post(authController.register)
    .catch((err) => console.error(err));

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(auth, tripsController.tripsUpdateTrip)
    .delete(auth, tripsController.tripsDeleteTrip);

module.exports = router;