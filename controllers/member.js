const { memberByFindAll } = require('../services/member');
const {Calendar} = require('../models')

exports.memberByFindAllController = async (req, res, next) => {
    const memberList = await memberByFindAll();
    return res.status(200).json(memberList);
}