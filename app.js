const express = require('express');
const morgan = require('morgan');
const { sequelize } =  require("./models");
const dotenv =  require('dotenv');
const models = require("./models");
const indexRouter = require('./routes');

dotenv.config();

const app = express();
app.use(morgan('dev'));
app.set('port', process.env.PORT || 8000);

sequelize.sync({force: false})
    .then(()=> {
        console.log('데이터베이스 연결');
    })
    .catch((err)=>{
        console.error(err);
    })

app.use('/', indexRouter)
app.use((req, res, next) => {
    const err = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    err.status = 404;
    // logger.info('hello');
    // logger.error(err.message);
    next(err);
})

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.err = process.env.NODE_ENV !== 'build' ? err : {};
    res.status(err.status || 500);
    res.send('error');
})


module.exports = app;