const { departmentFindAll} = require('../services/department');

exports.departmentFinAllController = async (req, res, next) => {
    const departmentList = await departmentFindAll();
    res.status(200).json(departmentList);
}