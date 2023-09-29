import { serviceCalendarByFindAll, } from '../services/calendar.js';
import Schedule from '../models/Schedule.js';


export const calendarByFindAll = async (req, res ,next) => {
    const calendarList = await serviceCalendarByFindAll({include: Schedule});
    res.status(200).json(calendarList);
}