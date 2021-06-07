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
       // InsertData(con);
      // DeleteData(con);
      //UpdateData(con);
      SelectData(con)
    }

});

function InsertData(con)
{
    let SQLQuery="INSERT INTO `students_list` (`Name`,`City`, `Phone`, `Class`) VALUES ('Imam','Sylhet','01719374790','11')";

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

function DeleteData(con)
{
    let SQLQuery="DELETE FROM `students_list` WHERE `ID`='2'";
    con.query(SQLQuery,function(error){
        if(error)
        {
            console.log("Data delete fail");
        }
        else {
            console.log("Data delete success");
        }
    })

}

function UpdateData(con)
{
    let SQLQuery="UPDATE `students_list` SET `City`='Mirpur',`Phone`=01742042091 WHERE `id`=1";
    con.query(SQLQuery,function(error){
        if(error)
        {
            console.log("Data update fail");
        }
        else {
            console.log("Data update success");
        }
    })

}

function SelectData(con)
{
    let SQLQuery="SELECT * FROM `students_list`";
    con.query(SQLQuery,function(error,result){
        if(error)
        {
            console.log("Data select fail");
        }
        else {
            console.log(result);
        }
    })

}

