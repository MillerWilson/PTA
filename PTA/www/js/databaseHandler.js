var databaseHandler = 
{
	db: null,
	createDatabase: function()
	{
		this.db = window.openDatabase("questions.db", 1.0,"question database", 1000000);
		this.db.transaction(
			function(tx)
			{
				//sql
				tx.executeSql( "create table if not exists questions(_id integer primary key, prompt varchar, q1 varchar, q2 varchar, q3 varchar, q4 varchar, explanation varchar", [],
					function(tx, results) {}, function(tx, error)
					{
						console.log("Error while creating table" +error.message);
					})
			},
			function(error)
			{
				console.log("transaction error" + error.message);
			},
			function()
			{
				console.log("created database successfully");
			}
							);
	}
}