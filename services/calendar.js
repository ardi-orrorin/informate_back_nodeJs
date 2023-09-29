import {Calendar, Schedule} from '../models/index.js';

export const serviceCalendarByFindAll = () => {
    return Calendar.findAll({include: Schedule});
}