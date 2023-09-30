import {SERVER_HOST, SERVER_PORT} from "../config/env.js";

export const loginSchema = ({member, accessToken}) => {
    return {
        memberCode: member['MEMBER_CODE'],
        memberId: member['MEMBER_ID'],
        memberName: member['MEMBER_NAME'],
        memberEmail: member['MEMBER_EMAIL'],
        memberPic: SERVER_HOST + ':' + SERVER_PORT + '/imgs/' + member['MEMBER_PIC'],
        memberPicDefault: SERVER_HOST + ':' + SERVER_PORT + '/imgs/' + member['MEMBER_PIC_ORIGIN'],
        rank: member.Rank['RANK_NAME'],
        deptName: member.Department['DEPT_CODE'],
        deptCode: member.Department['DEPT_NAME'],
        accessToken,
    }
}