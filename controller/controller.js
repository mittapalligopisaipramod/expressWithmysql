let db=require('../model/model');
let getAll=async(req,res)=>{
    try {
        let getall=await db.query('select * from user');
        if(!getall){
            res.send({
                message:'no records found',
                success:false
            })
        }
        res.send(getall[0]);
    } catch (error) {
        console.log(error);
        console.log('error getting in getall controller method');
    }
}
let addData=async(req,res)=>{
    try {
        let data=req.body;
        let insertData=await db.query(`INSERT INTO user VALUES (?,?)`,[data.Name,data.Password]);
        res.json(insertData[0]);
    } catch (error) {
        console.log(error);
        console.log('error in adding data controller method');
    }
}
let updateData=async(req,res)=>{
    try {
        let userName=req.params.Name;
        //let userData=await db.query('SELECT * FROM user WHERE NAME=?',[userName]);
        //console.log(userData);
        console.log(userName);
        let updateRecord=await db.query(`UPDATE  user SET Password=? WHERE Name=?`,[req.body.Password,userName]);
        console.log(req.body.Password);
        res.json(updateRecord);
    } catch (error) {
        console.log(error);
        console.log('error is in updating data controller method');
    }
}
let deleteData=async(req,res)=>{
    try {
        let userName=req.params.Name;
        let deleteRecord=await db.query(`DELETE FROM user WHERE Name=?`,[userName]);
        res.json(deleteRecord);
    } catch (error) {
        console.log(error);
        console.log('error is in deleteData controller method');
    }
}
module.exports={
    getAll,
    addData,
    updateData,
    deleteData
};