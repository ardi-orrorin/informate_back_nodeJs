const member  = require('./member');
const calendar  = require('./calendar');
const schedule  = require('./schedule');
const department = require('./department');
const favCalendar = require('./favCalendar');
const participant = require('./participant');
const app = require('express')();

app.use('/member', member);
app.use('/calendar', calendar);
app.use('/schedule', schedule);
app.use('/department', department);
app.use('/favCalendar', favCalendar);
app.use('/participant', participant);





module.exports = app;