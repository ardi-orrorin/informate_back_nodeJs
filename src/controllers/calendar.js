import {
    deleteById,
    myCalendarList as myCalList,
    serviceCalendarByFindAll, updateById as calUpdateById,
    updateCalendarIndexNo as calIndexChange,
} from '../services/calendar.js';

export const member = ({member}) => {
    return {
        memberCode: member['MEMBER_CODE'],
        department: member['DEPT_CODE'],
    };
}

export const calendarByFindAll = async (req, res ,next) => {

    const {memberCode, department} = member({member: req.member});

    const calendarList = await serviceCalendarByFindAll({id: memberCode, department: department});
    return res.status(200).json({stauts: 200, message: 'success', data: calendarList});
}

export const myCalendarList = async (req, res, next) => {
    const {memberCode, department} = member({member: req.member});

    const result = await myCalList({
        memberCode: memberCode, departmentCode: department
    })

    return res.stauts(result.status).json(result);
}

export const updateByCalendar = async (req, res, next) => {
    const {memberCode} = member({member: req.member});
    const result = await calUpdateById({calendar: req.calendar})
    return res.stauts(result.status).json(result);
}

export const updateCalendarIndexNo = async (req, res, next) => {

    const {memberCode} = member({member: req.member});

    const result = await calIndexChange({info: req.info, memberCode: memberCode});

    return res.stauts(result.status).json(result);
}

export const deleteByCalendar = async (req, res, next) => {

    const calendarCode = req.query.calendarCode;
    const {memberCode} = member({member: req.member});

    const result = await deleteById({calendarCode: calendarCode, memberCode: memberCode})

    return res.stauts(result.status).json(result);
}




