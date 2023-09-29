import express            from "express";
import member             from './member.js';
import calendar           from './calendar.js';
import schedule           from './schedule.js';
import department         from './department.js';
import favCalendar        from './favCalendar.js';
import participant        from './participant.js';
import auth               from "./auth.js";
import {isLoggedIn} from "../middlewares/index.js";

const app = express();

app.use('/auth',          auth);
app.use('/member',        isLoggedIn, member);
app.use('/calendar',      isLoggedIn, calendar);
app.use('/schedule',      isLoggedIn, schedule);
app.use('/department',    isLoggedIn, department);
app.use('/favCalendar',   isLoggedIn, favCalendar);
app.use('/participant',   isLoggedIn, participant);

export default app;