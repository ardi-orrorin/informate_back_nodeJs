const router = require('express').Router();
const { favCalendarFindAllController } = require('../controllers/favCalendar');

router.get('/', favCalendarFindAllController);

module.exports = router;