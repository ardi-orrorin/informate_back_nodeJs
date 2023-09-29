import { memberByFindAll } from '../services/member.js';
import {Calendar} from '../models/index.js';

export const memberByFindAllController = async (req, res, next) => {
    const memberList = await memberByFindAll();
    return res.status(200).json(memberList);
}