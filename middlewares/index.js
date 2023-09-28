const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

exports.verifyToken = (req, res, next) => {
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


exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        next();
    }else{
        res.status(403).json({
            message: '로그인 필요'
        })
    }
}

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        next();
    }else{
        res.status(403).json({
            message: '로그인한 상태 입니다.'
        })
    }
}