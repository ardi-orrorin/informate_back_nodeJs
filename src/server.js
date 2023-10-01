import app from './app.js' ;

app.listen(app.get('port'),()=>{
    console.log(`${app.get('port')} 서버 포트 사용 중`);
})