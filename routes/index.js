import member             from './member.js';
import calendar           from './calendar.js';
import schedule           from './schedule.js';
import department         from './department.js';
import favCalendar        from './favCalendar.js';
import participant        from './participant.js';

import express from "express";

const app = express();

app.use('/member', member);
app.use('/calendar', calendar);
app.use('/schedule', schedule);
app.use('/department', department);
app.use('/favCalendar', favCalendar);
app.use('/participant', participant);

export default app;