const { Department, Member } = require('../models')

exports.departmentFindAll =  () => {
    return Department.findAll({include: Member})
        .then(result => result.map(dept => {
                dept.Members.map(member => {
                    member['MEMBER_PWD'] = undefined; // 민갑정보 삭제
                    member['MEMBER_CODE'] = undefined; // 민갑정보 삭제
                    return member;
                });
                return dept;
            }
        ));
}