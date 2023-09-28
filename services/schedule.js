const {Schedule, Calendar, Participant, Member} = require('../models');

exports.serviceScheduleByFindAll = () => {
    return Schedule.findAll({include: [Calendar, Member]});
}