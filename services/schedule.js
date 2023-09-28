const {Schedule, Calendar} = require('../models');

exports.serviceScheduleByFindAll = () => {
    return Schedule.findAll({include: Calendar});
}