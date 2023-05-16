const router = require('express').Router();

const usersRoutes = require('./user-routes');
const choicesRoutes = require('./choices-routes');
const memesRoute = require('./memes-routes');

router.use('/users', usersRoutes);

router.use('/choices', choicesRoutes);

router.use('/memes', memesRoute)

module.exports = router;