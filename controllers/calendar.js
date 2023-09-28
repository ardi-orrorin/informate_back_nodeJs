const { serviceCalendarByFindAll, } = require('../services/calendar');
const Schedule = require('../models/Schedule');


exports.calendarByFindAll = async (req, res ,next) => {
    const calendarList = await serviceCalendarByFindAll({include: Schedule});
    res.status(200).json(calendarList);
}