const router = require('express').Router();
const { event, enableEvent, users } = require('./controller');
const controller = require('./controller');

router.post('/', event);
router.get('/socket.io', (req, res) => { console.log('here') });
router.get('/users', users);


module.exports = router;