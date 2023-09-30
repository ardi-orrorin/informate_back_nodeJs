import { regist } from '../services/auth.js'
import passport from "passport";
import {createToken} from "../jwt/tokenProvider.js";
import {loginSchema} from '../schemas/auth.js';


export const accountRegist = async (req, res, next) => {
    const result = await regist({member: req.body, files: req.files});

    if(!result.err) return next(result.err);

    return res.status(result.status)
        .json({
            code: result.status,
            data: result.result
        });
}

export const login = async (req, res, next) => {
    passport.authenticate('local',(err, member, info)=>{
        if(err) return next(err);

        if(!member) return res.redirect('/');

        return req.login(member, async (err) => {
            if(err) return next(err);

            const result = await createToken(member['MEMBER_ID']);

            return res.status(result.code).json({
                status: result.code,
                message: result.message,
                data: loginSchema({
                    member: member, accessToken: result.token
                }),
            });
        })
    })(req, res, next);
}

export const logout = async (req, res) => {
    req.logout(()=>{
       res.redirect('/');
    });
}
