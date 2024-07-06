let mysql2=require('mysql2/promise');
var connection = mysql2.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'pramod.1',
    database: 'userDetails'
});
module.exports=connection;