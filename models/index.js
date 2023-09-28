'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'dev';
const config = require('../config/config.js')[env];
const sequelize = new Sequelize({...config});
const db = {};

db.sequelize = sequelize;
db.Calendar = require('./Calendar')(sequelize, Sequelize);
db.Schedule = require('./Schedule')(sequelize, Sequelize);
db.Member = require('./Member')(sequelize, Sequelize);
db.Department = require('./Department')(sequelize, Sequelize);
db.FavCalendar = require('./FavCalendar')(sequelize, Sequelize);



db.Department.hasMany(db.Member, {foreignKey: 'DEPT_CODE', sourceKey: 'DEPT_CODE'});


db.Member.belongsTo(db.Department,{foreignKey: 'DEPT_CODE', targetKey: 'DEPT_CODE'});
db.Member.hasMany(db.Calendar, {foreignKey: 'REF_MEMBER_CODE', sourceKey: 'MEMBER_CODE'});
db.Member.hasMany(db.FavCalendar, {foreignKey: 'REF_MEMBER_CODE', sourceKey: 'MEMBER_CODE'})


db.Calendar.belongsTo(db.Member, {foreignKey: 'REF_MEMBER_CODE', targetKey: 'MEMBER_CODE'});
db.Calendar.hasMany(db.FavCalendar,  {foreignKey: 'REF_CLDNR_ID', sourceKey: 'CLNDR_CODE'})
db.Calendar.hasMany(db.Schedule, {foreignKey: 'REF_CLNDR_ID', sourceKey: 'CLNDR_CODE'});


db.FavCalendar.belongsTo(db.Member, {foreignKey: 'REF_MEMBER_CODE', targetKey: 'MEMBER_CODE'});
db.FavCalendar.belongsTo(db.Calendar,  {foreignKey: 'REF_CLDNR_ID', targetKey: 'CLNDR_CODE'});


db.Schedule.belongsTo(db.Calendar, {foreignKey: 'REF_CLNDR_ID', targetKey: 'CLNDR_CODE'});



module.exports = db;
