import { serviceCalendarByFindAll, } from '../services/calendar.js';

export const calendarByFindAll = async (req, res ,next) => {

    const id = req.member['MEMBER_CODE'];
    const department = req.member['DEPT_CODE'];

    const calendarList = await serviceCalendarByFindAll({id: id, department: department});
    res.status(200).json({stauts: 200, message: 'success', data: calendarList});
}

