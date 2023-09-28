const {Calendar, Schedule, Member} = require('../models');


exports.memberByFindAll = async () => {
    return await Member.findAll({include: Calendar})
        .then(res =>
        res.map(item=> {
            item['MEMBER_PWD'] = undefined;
            return item;
        }));
}
