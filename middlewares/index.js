import rateLimit     from 'express-rate-limit';
import dotenv from 'dotenv';
dotenv.config();


export const isLoggedIn = (req, res, next) => {

    console.log('isloggen',req.isAuthenticated);
    if(req.isAuthenticated){
        next();
    }else{
        res.status(403).json({
            message: '로그인 필요'
        })
    }
}

export const isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated){
        next();
    }else{
        res.status(403).json({
            message: '로그인한 상태 입니다.'
        })
    }
}