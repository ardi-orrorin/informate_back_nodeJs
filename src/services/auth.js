import bcrypt from "bcrypt";
import passport from "passport";
import {Member} from "../models/index.js";

export const regist = async ({member, files}) => {
    const {
        memberId, memberPassword, memberName, memberEmail,
        memberPhone, memberNo, memberStatus, deptCode,
        memberAddress, hireDate, memberOff, rankCode
    } = member;
    try {
        const exMember = Member.findOne({where: {'MEMBER_ID': memberId}});

        if(exMember) return { status: 404, result: null, err: new Error('이미 있는 사용자 입니다.')};

        const hashPassword = bcrypt.hash(memberPassword, 12);

        const result = await Member.create({
            'MEMBER_ID': memberId,
            'MEMBER_PWD': hashPassword,
            'MEMBER_NAME': memberName,
            'MEMBER_EMAIL': memberEmail,
            'MEMBER_PHONE': memberPhone,
            'MEMBER_NO': memberNo,
            'MEMBER_STATUS': memberStatus,
            'MEMBER_ADDRESS': memberAddress,
            'HIRE_DATE': hireDate,
            'DEPT_CODE': deptCode,
            'RANK_CODE': rankCode,
            'MEMBER_OFF': memberOff,
            // 'EXTENSION_NUMBER': extensionNumber,
            // 'MEMBER_PIC':
            // 'MEMBER_PIC_ORIGIN':
        });

        return { status: 201, result};
    } catch (err) {
        return {err}
    }
}
