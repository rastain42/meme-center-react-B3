
const router = require('express').Router();

const {
    getAll, upload,
} = require('../../controllers/memes-controller');

router.route('/').get(getAll)

router.route('/upload').post(upload)

module.exports = router;



