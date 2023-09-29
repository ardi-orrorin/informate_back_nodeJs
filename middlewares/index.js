import jwt           from 'jsonwebtoken';
import rateLimit     from 'express-rate-limit';
import('dotenv').config();

export const verifyToken = (req, res, next) => {
    try {
        res.locals.decoded = jwt.verify(req.headers.Authorization, process.env.JWT_SECRET);
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


export const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        next();
    }else{
        res.status(403).json({
            message: '로그인 필요'
        })
    }
}

export const isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        next();
    }else{
        res.status(403).json({
            message: '로그인한 상태 입니다.'
        })
    }
}