const {Calendar, Schedule}  = require('../models');

exports.serviceCalendarByFindAll = () => {
    return Calendar.findAll({include: Schedule});
}