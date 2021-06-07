var mysql=require('mysql');
var dbconnectionconf={
    host:"localhost",
    user:"root",
    password:"",
    database:"school"
}

var con=mysql.createConnection(dbconnectionconf);
con.connect(function(error)
{
    if(error)
    {
        console.log("Connection fail");  
    }
    else
    {
        console.log("connection success");
        InsertData(con);
    }

});

function InsertData(con)
{
    let SQLQuery="INSERT INTO `students_list` (`Name`,`City`, `Phone`, `Class`) VALUES ('Ahsan','Sylhet','01719374786','13')";

    con.query(SQLQuery,function(error)
    {
        if(error)
        {
            console.log("Data insert fail");
        }
        else
        {
            console.log("Data insert success");
        }

    })
}