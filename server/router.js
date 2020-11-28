const router = require('express').Router();
const { event, enableEvent } = require('./controller');
const controller = require('./controller');

router.post('/', event);


module.exports = router;