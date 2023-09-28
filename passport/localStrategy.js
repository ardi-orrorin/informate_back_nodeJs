const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const {Member} = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy({
            usernameField: 'id',
            passwordField: 'password',
            passReqToCallback: false // 인증 함수로 HTTP requestd  그대로 전달할 지 여부 결정
        }, async(memberId, password, done) => {
            try{
                const exUser = await Member.findOne({where: {userid: memberId}});
                if(exUser){
                    const result = await bcrypt.compare(password, exUser['MEMBER_PWD']);
                    if(result){
                        done(null, exUser);
                    }else{
                        done(null, false, {message: '비밀번호가 일치 하지 않습니다.'});
                    }
                } else {
                    done(null, false, {message: '계정을 찾을 수 없습니다.'})
                }

            } catch(err) {
                done(err);
            }
        })
    );
}
