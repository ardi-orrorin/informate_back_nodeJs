const router = require('express').Router();
const { calendarByFindAll } = require('../controllers/calendar')


router.get('/', calendarByFindAll);

module.exports = router;
