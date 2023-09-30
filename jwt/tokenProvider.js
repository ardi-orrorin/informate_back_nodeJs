import {Member} from "../models/index.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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

        console.log(token);

        return {
            code: 200,
            message: '로그인에 성공했습니다.',
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

export const verifyToken =  async (req, res, next) => {
    try {
        jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        const {id} = jwt.decode(req.headers.authorization, process.env.JWT_SECRET);
        const member = await Member.findOne({where: {'MEMBER_ID': id}});
        req.member = member;
        return next();
    } catch (err) {
        if(err.name === 'TokenExpiredError'){
            return res.status(419).json({
                message: '토큰이 만료 되었습니다.'
            });
        }
        return res.status(401).json({
            message: '유효하지 않은 토큰입니다.'
        });
    }
}

