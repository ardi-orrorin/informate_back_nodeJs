import passport      from 'passport';
import local         from './localStrategy.js';
import { Member }    from '../models/index.js';

export default () => {
    passport.serializeUser((member, done) => {
        console.log(member);
        done(null, member['MEMBER_ID'])
    });

    passport.deserializeUser((memberId, done) => {
        Member.findOne({where: {['MEMBER_ID']: memberId}})
            .then(member => done(null, member))
            .catch(err => done(err));
    })

    local();

}