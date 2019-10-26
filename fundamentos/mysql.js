//precisa instalar o mysql com npm ou yarn

const mysql  = require('mysql');
const conn = mysql.createConnection(
{
    host:'your_host',             //localhost 
    user:'db_user',               // usuario
    password: 'password',         // senha 
    database:'your_db_name'       // database
});

//executing the queries
conn.query('SELECT * from post',function(err,result){ //modo de passar a query
    if(err)
    {
        console.log(err);
    }
    else
    {
         console.log(result);
    }
});

