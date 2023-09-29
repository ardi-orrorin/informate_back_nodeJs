import {Schedule, Calendar, Participant, Member} from '../models/index.js';

export const serviceScheduleByFindAll = () => {
    return Schedule.findAll({include: [Calendar, Member]});
}