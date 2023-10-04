import {
    calendarByFindAll,
    deleteByCalendar,
    myCalendarList,
    updateByCalendar,
    updateCalendarIndexNo,
} from '../controllers/calendar.js';
import express from 'express';
const router = express();


router.get('/list', calendarByFindAll);
router.get('/mylist', myCalendarList);
// router.get('/ergist', sav);
router.get('/update', updateByCalendar);
// router.get('/updateDafault', updated);
router.get('/changeIndexNo', updateCalendarIndexNo);
router.get('/delete/:calendarCode', deleteByCalendar);
// router.get('/delete/openCalendarList', find);

export default router;
