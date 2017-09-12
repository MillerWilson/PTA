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
				tx.executeSql( "CREATE TABLE if not exists Questions (ID int NOT NULL,'Prompt' varchar(255) NOT NULL, a1 varchar(255) NOT NULL, a2 varchar(255) NOT NULL,a3 varchar(255),a4 varchar(255), correct answer varchar(2) NOT NULL, Explanation varchar(255) NOT NULL, type varchar(255) NOT NULL, PRIMARY KEY (ID));", [],
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