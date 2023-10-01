import { favCalendarByFindAll } from '../services/favCalendar.js';

export const favCalendarFindAllController = async (req, res, next) => {
    const favCalendarList = await favCalendarByFindAll();
    return res.status(200).json(favCalendarList);
}