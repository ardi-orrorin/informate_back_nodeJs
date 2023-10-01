import express           from 'express';
import morgan            from 'morgan';
import { sequelize }     from "./models/index.js";
import cookieParser      from 'cookie-parser';
import session           from 'express-session';
import helmet            from 'helmet';
import hpp               from 'hpp';
import dotenv            from 'dotenv';
import Routers           from './routes/index.js';
import passportConfig    from './passport/index.js';
import cors from "cors";


dotenv.config();

const app = express();
passportConfig();

app.set('port', process.env.PORT || 8000);

sequelize.sync({force: false})
    .then(()=> {
        console.log('데이터베이스 연결');
    })
    .catch((err)=>{
        console.error(err);
    })

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors({
    credentials: true,
    allowedHeaders: '*',
    methods: '*',
    origin: '*',
}))

const sessionOption = {
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
    },
}

if(process.env.NODE_ENV === 'build'){
    app.use(morgan('combined'));
    sessionOption.proxy = true;
    app.use(helmet({
        contentSecurityPlicy: false,
        crossOriginEmbedderPolicy: false,
        crossOriginResourcePolicy: false,
    }))
    app.use(hpp());
} else {
    app.use(morgan('dev'));
}

app.use(session(sessionOption));

app.use('/', Routers);


app.use((req, res, next) => {
    const err = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    err.status = 404;
    // logger.info('hello');
    // logger.error(err.message);
    next(err);
})

app.use((err, req, res, next) => {
    console.log(err)
    res.locals.message = err.message;
    res.locals.err = process.env.NODE_ENV !== 'build' ? err : {};
    res.status(err.status || 500);
    res.send('error');
})


export default app;