import {Calendar, Department, Member, Schedule, sequelize} from '../models/index.js';
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


export const saveDepartmentCalendarRegist = async ({deptCode}) => {
    const t = await sequelize.transaction();
    try {
        const isDeptExist = await Department.findOne({where:{'DEPT_CODE': deptCode}});
        const isExist =  await Calendar.findOne({where: {'DPRMT_CODE': deptCode}})
            .then(res => true)
            .catch(err => false)

        if(isExist) return {status: 404, message: '이미 부서가 존재 합니다.'}

        const deptCalendar = await Calendar.create({
            'CLNDR_NAME': isDeptExist['DEPT_NAME'] + '일정',
            'DPRMT_CODE': isDeptExist['DEPT_CODE'],
            'LABEL_COLOR': '#0000FF',
            'DEFAULT_SELC': true,
            'REF_MEMBER_CODE': 0,
            'OPEN_STATUS': false,
            'INDEX_NUM': 1,
        },{transaction: t});

        return {status: 201, message: '부서 캘린더가 생성되었습니다.', data: deptCalendar};

    } catch (e) {
        await t.rollback();
        return {status: 404, message: '부서를 찾을 수 없습니다.'}
    }
}

export const saveFirstCalenderRegist = async ({memberCode}) => {
    const t = await sequelize.transaction();
    try {
        const calendar = await Calendar.create({
            'CLNDR_NAME': '캘린더',
            'DEFAULT_SELC': true,
            'REF_MEMBER_CODE': memberCode,
            'OPEN_STATUS': false,
            'INDEX_NUM': 1,
        },{transaction: t});
        return {status: 201, message: '캘린더 생성에 성공했습니다.', data: calendar}
    } catch (e) {
        await t.rollback();
        return {status: 501, message: '유저 캘린더를 생성할 수 없습니다.'}
    }
}

export const updateById = async ({calendar}) => {
    const t = await sequelize.transaction();
    try {
        const eCalendar = await Calendar.findOne({where: {'CLNDR_CODE': calendar.id}});
        eCalendar.updateData({calendar});
        const result = await Calendar.update(eCalendar, {transaction: t});
        return {status: 200, message: '캘린더 수정에 성공했습니다.', data: result};

    } catch (e) {
        await t.rollback();
        return {status: 521, message: '캘린더를 찾을 수 없습니다.'}
    }
}

export const updateDefaultCalendar = async ({calendar, memberCode}) => {
    const t = await sequelize.transaction();
    try {
        const old = await Calendar.findOne({where: {'REF_MEMBER_CODE': memberCode, 'DEFAULT_SELC': true}});
        old['DEFAULT_SELC'] = false;
        await Calendar.update(old);

        const newCal = await Calendar.findOne({where: {'CLNDR_CODE': calendar.id}});
        newCal['DEFAULT_SELC'] = true;
        await Calendar.update(newCal);

        return {status: 200, message: '기본 캘린더 수정에 성공했습니다.'};

    } catch (e) {
        await t.rollback();
        return {status: 521, message: '기본 캘린더를 수정할 수 없습니다.'}
    }
}

export const updateCalendarIndexNo = async ({info, memberCode}) => {
    const t = await sequelize.transaction();
    try {
        // 로직
    } catch (e) {
        await t.rollback();
        return {status: 521, message: ''}
    }
}


export const deleteById = async ({calendarCode, memberCode}) => {
    const t = await sequelize.transaction();
    try {

    } catch (e) {
        await t.rollback();
        return {status: 521, message: ''}
    }
}

export const openCalendarList = async ({memberCode, pageablue}) => {
    const result = await Calendar.findAll({where:{'REF_MEMBER_CODE': memberCode, 'OPEN_STATUS': true }})
    return {status: 200, message: '', data: result};
}

