const router = require('express').Router();
const { participantByFindAllController } = require('../controllers/participant');

router.get('/', participantByFindAllController);

module.exports = router;