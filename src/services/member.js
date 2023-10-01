import { Calendar, Schedule, Member } from '../models/index.js';
import jwt from "jsonwebtoken";

export const memberByFindAll = async () => {
    return await Member.findAll({include: Calendar})
        .then(res =>
        res.map(item=> {
            item['MEMBER_PWD'] = undefined;
            return item;
        }));
}

