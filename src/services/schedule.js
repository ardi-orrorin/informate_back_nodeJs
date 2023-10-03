import { Schedule, Calendar, Participant, Member } from '../models/index.js';
import e from "express";
import {Op} from "sequelize";


export const serviceScheduleByFindAll = () => {
    return Schedule.findAll({include: [Calendar, Member]});
}

export const findById =  async ({scheduleId, memberCode}) => {
    const schedule = await Schedule.findOne({
        include: [Member, Calendar],
        where: {
            'SCHDL_ID': scheduleId
        }
    }).then(res =>  res)
        .catch(err => err);


    const isExist = schedule.calendar['REF_MEMBER_CODE'] === memberCode ? true : false;

    if(isExist) return {status: 200, message: '조회에 성공했습니다.', data: schedule};

    return {status: 204, message: '일정을 조회할 수 없습니다.', error: schedule}
}

export const updateById = async ({schedule, memberCode}) => {

    const result = await findById({scheduleId: schedule.scheduleId, memberCode: memberCode});

    if(result?.error !== undefined) return {status: 204, message: '일정을 조회할 수 없습니다.', error: result};


    // 수정 로직

    Schedule.update(result);

    return {status: 200, message: '정상적으로 수정되었습니다.', data: result};

}

export const deleteById = async ({scheduleId, memberCode, detpCode}) => {
    const result = await findById({scheduleId: scheduleId, memberCode: memberCode});


    if(result?.error !== undefined) return {status: 204, message: '일정을 조회할 수 없습니다.', error: result};

    await Schedule.destroy({where: {'SCHDL_ID': scheduleId}});
}

export const reminder = async ({memberCode}) => {

    const start = new Date();
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);
    start.setMilliseconds(0);

    const end = new Date();
    end.setHours(23);
    end.setMinutes(59);
    end.setSeconds(59);

    const result = await Schedule.findAll({where: {
            'END_DATE': {
                [Op.between]: [start, end]
            }
        }
    })

    result.filter((sc) => (
        sc.calendar['REF_MEMBER_CODE'] === memberCode
    ));

    return {status: 200, message: '조회에 성공했습니다.', data: result};
}