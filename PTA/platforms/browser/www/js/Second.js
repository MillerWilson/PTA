
var alasql = require("/alasql.js");
alert("sdfgsg");
var db = new alasql.Database();
db.exec("CREATE TABLE example (a INT, b INT)");

// You can insert data directly from javascript object...
db.tables.example1.data = [ 
    {a:5,b:6},
    {a:3,b:4}
];
// ...or you can insert data with normal SQL 
db.exec("INSERT INTO example1 VALUES (1,3)");

var res = db.exec("SELECT * FROM example1 ORDER BY b DESC");

// res now contains this array of objects:
// [{a:1,b:3},{a:3,b:4},{a:3,b:4}]















