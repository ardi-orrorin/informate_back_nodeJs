import {FavCalendar, Calendar, Member} from '../models/index.js';

export const favCalendarByFindAll = async () => {
    return FavCalendar.findAll({include: [Calendar, Member]})
        .then(result => result.map(favCalendar => {
            console.log(favCalendar)
            favCalendar.Member['MEMBER_CODE'] = undefined;
            favCalendar.Member['MEMBER_PWD'] = undefined;
            return favCalendar;
        }))
}