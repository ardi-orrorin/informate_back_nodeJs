import { regist } from '../services/auth.js'
import passport from "passport";

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

        return req.login(member, (err) => {
            if(err) return next(err);

            return res.redirect('/')
        })
    })(req, res, next);
}

export const logout = async (req, res) => {
    req.logout(()=>{
       res.redirect('/');
    });
}
