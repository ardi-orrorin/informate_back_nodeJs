const { memberByFindAllController } = require('../controllers/member');
const router = require('express').Router();

router.get('/', memberByFindAllController);

module.exports = router;