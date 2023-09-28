const { favCalendarByFindAll } = require('../services/favCalendar');

exports.favCalendarFindAllController = async (req, res, next) => {
    const favCalendarList = await favCalendarByFindAll();
    return res.status(200).json(favCalendarList);
}