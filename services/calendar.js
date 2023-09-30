import {Calendar, Member, Schedule} from '../models/index.js';
import {Op} from "sequelize";

export const serviceCalendarByFindAll = ({id, department}) => {
    return Calendar.findAll({include: [Schedule, Member], where: {
        [Op.or]: [
            {['REF_MEMBER_CODE']: id},
            {['DPRMT_CODE']: department}
        ]}
    });
}