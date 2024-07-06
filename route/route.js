let express=require('express');
let controller=require('../controller/controller');
let route=express.Router();
route.get('/all',controller.getAll);
route.post('/add',controller.addData);
route.put('/update/:Name',controller.updateData);
route.delete('/delete/:Name',controller.deleteData);
module.exports=route;