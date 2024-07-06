let express=require('express');
let connection=require('./model/model');
let route=require('./route/route');
let app=express();
app.use(express.json());
connection.query('SELECT 1')
.then(()=>{
    console.log('database connected');
    app.listen('3008',()=>{
        console.log('server is started');
    });
}).catch((e)=>{
    console.log(e);
    console.log('database connection error');
});
app.use('/user/credientels',route);