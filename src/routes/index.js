import express            from "express";
import member             from './member.js';
import calendar           from './calendar.js';
import schedule           from './schedule.js';
import department         from './department.js';
import favCalendar        from './favCalendar.js';
import participant        from './participant.js';
import auth               from './auth.js';
import {verifyToken}      from "../jwt/tokenProvider.js";
// import {isLoggedIn} from '../middlewares/index.js';


const app =      express();

app.use('/auth',          auth);
app.use('/member',        verifyToken, member);
app.use('/calendar',      verifyToken, calendar);
app.use('/schedule',      verifyToken, schedule);
app.use('/department',    verifyToken, department);
app.use('/favCalendar',   verifyToken, favCalendar);
app.use('/participant',   verifyToken, participant);

export default app;