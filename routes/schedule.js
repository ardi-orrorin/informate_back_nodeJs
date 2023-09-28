const router = require('express').Router();
const { scheduleByFindAll } = require('../controllers/schedule')


router.get('/', scheduleByFindAll);

module.exports = router;
