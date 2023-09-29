'use strict';

import Sequelize from 'sequelize';
import config from '../config/config.js';

import participant from './Participant.js';
import member from './Member.js';
import favCalendar from './FavCalendar.js';
import department from './Department.js';
import calendar from './Calendar.js';
import schedule from './Schedule.js';

const env = process.env.NODE_ENV || 'dev';
export const sequelize = new Sequelize({...config[env]});
// export const db = {};

// db.sequelize = sequelize;
export const Calendar = calendar(sequelize, Sequelize);
export const Schedule = schedule(sequelize, Sequelize);
export const Member = member(sequelize, Sequelize);
export const Department = department(sequelize, Sequelize);
export const FavCalendar = favCalendar(sequelize, Sequelize);
export const Participant = participant(sequelize, Sequelize);


Department.hasMany(Member, {foreignKey: 'DEPT_CODE', sourceKey: 'DEPT_CODE'});


Member.belongsTo(Department,{foreignKey: 'DEPT_CODE', targetKey: 'DEPT_CODE'});
Member.hasMany(Calendar, {foreignKey: 'REF_MEMBER_CODE', sourceKey: 'MEMBER_CODE'});
Member.hasMany(FavCalendar, {foreignKey: 'REF_MEMBER_CODE', sourceKey: 'MEMBER_CODE'})
Member.belongsToMany(Schedule, {through: 'Participant', foreignKey: 'REF_MEMBER_CODE'})


Calendar.belongsTo(Member, {foreignKey: 'REF_MEMBER_CODE', targetKey: 'MEMBER_CODE'});
Calendar.hasMany(FavCalendar,  {foreignKey: 'REF_CLDNR_ID', sourceKey: 'CLNDR_CODE'})
Calendar.hasMany(Schedule, {foreignKey: 'REF_CLNDR_ID', sourceKey: 'CLNDR_CODE'});


FavCalendar.belongsTo(Member, {foreignKey: 'REF_MEMBER_CODE', targetKey: 'MEMBER_CODE'});
FavCalendar.belongsTo(Calendar,  {foreignKey: 'REF_CLDNR_ID', targetKey: 'CLNDR_CODE'});


Schedule.belongsTo(Calendar, {foreignKey: 'REF_CLNDR_ID', targetKey: 'CLNDR_CODE'});
Schedule.belongsToMany(Member, {through: 'Participant', foreignKey: 'REF_SCHDL_ID'})


