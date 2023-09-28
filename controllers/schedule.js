const { serviceScheduleByFindAll, } = require('../services/schedule')


exports.scheduleByFindAll = async (req, res ,next) => {
    const scheduleList = await serviceScheduleByFindAll();
    res.status(200).json(scheduleList);
}