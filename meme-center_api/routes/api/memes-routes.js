
const router = require('express').Router();

const {
    getAll, upload,
} = require('../../controllers/memes-controller');

router.route('/').get(getAll)

router.route('/').post(upload)

module.exports = router;



