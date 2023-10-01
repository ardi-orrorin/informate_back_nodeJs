import { serviceScheduleByFindAll, } from '../services/schedule.js';


export const scheduleByFindAll = async (req, res ,next) => {
    const scheduleList = await serviceScheduleByFindAll();
    res.status(200).json(scheduleList);
}