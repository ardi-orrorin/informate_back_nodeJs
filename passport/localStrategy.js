import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';
import {Department, Member, Rank} from '../models/index.js';

export default () => {
    passport.use(new LocalStrategy({
            usernameField: 'id',
            passwordField: 'password',
            passReqToCallback: false // 인증 함수로 HTTP requestd  그대로 전달할 지 여부 결정
        }, async(memberId, password, done) => {
            try{
                const exUser = await Member.findOne({where: {'MEMBER_ID': memberId}, include: [Department, Rank]});
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
