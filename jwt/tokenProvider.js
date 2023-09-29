import {Member} from "../models/index.js";
import jwt from "jsonwebtoken";

export const createToken = async (memberId) => {
    try {

        const member = await Member.findOne({where: {'MEMBER_ID': memberId}});

        if(!member) {
            return {
                code: 401,
                message: '등록되지 않은 유저 입니다.',
            }

        }

        const token = jwt.sign({
            id: member['MEMBER_ID']
        }, process.env.JWT_SECRET, {
            expiresIn: '1h',
            algorithm: 'HS512',
            issuer: 'auth'
        });

        return {
            code: 200,
            message: '토큰이 발급되었습니다.',
            token,
        }
    } catch (e) {
        console.error(e);
        return {
            code: 500,
            message: '서버 에러',
        }
    }
}