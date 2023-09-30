import {Calendar, Member, Schedule, sequelize} from '../models/index.js';
import {Op} from "sequelize";

export const InitDefaultCalendar = async ({id}) => {
    const t = await sequelize.transaction();
    try {
        const defaultCalendar = await Calendar.findAll({where: {
                [Op.and]: [
                    {'DEFAULT_SELC': true},
                    {'REF_MEMBER_CODE': id}
                ]}
        });

        if(defaultCalendar.length > 1) { // default 캘린더 여러개 있을 경우
            await Calendar.update(defaultCalendar,{transaction: t});

            // defaultCalendar['OPEN_STATUS']
        }

        const calendar = await Calendar.findOne({where: {
                [Op.and]: [
                    {'DEFAULT_SELC': true},
                    {'REF_MEMBER_CODE': id}
                ]},
            order: ['INDEX_NUM','ASC']
        });

        calendar['DEFAULT_SELC'] = true;
        await Calendar.update(calendar, {transaction: t});

        await t.commit();

        return {status: 200, message: '수정에 성공했습니다'};
    } catch (e){
        await t.rollback();
        return e;
    }
}

export const serviceCalendarByFindAll = ({id, department}) => {
    return Calendar.findAll({include: [Schedule, Member], where: {
            [Op.or]: [
                {['REF_MEMBER_CODE']: id},
                {['DPRMT_CODE']: department}
            ]}
    });
}

export const saveByCalendar = async ({calendar}) => {
    const t = await sequelize.transaction();
    try {
        if(calendar.defaultCalendar){
            const defaultCalendar = await Calendar.findOne({where: {'DEFAULT_SELC': true}});
            defaultCalendar['DEFAULT_SELC'] = false;
            Calendar.update(defaultCalendar, {transaction: t});
        }

        const lastIndexNo = await Calendar.findOne({
            attributes: 'INDEX_NUM',
            order: ['INDEX_NUM', 'DESC']
        });

        calendar.indexNo = (null || undefined) ? 1 : lastIndexNo + 1;

        const result = await calendar.create(calendar, {transaction: t});

        return {status: 201, message: '캘린더를 추가했습니다.', data: result};
    } catch (e) {
        await t.rollback();
        return e;
    }
}

