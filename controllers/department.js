import { departmentFindAll } from '../services/department.js';

export const departmentFinAllController = async (req, res, next) => {
    const departmentList = await departmentFindAll();
    res.status(200).json(departmentList);
}