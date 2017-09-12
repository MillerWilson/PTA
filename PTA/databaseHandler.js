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
				tx.executeSql( "create table if not exists questions")
			}, function(error)
			{
				console.log("transaction error" + error.message);
			}, function()
			{
				console.log("created database successfully");
			}
							);
	}
}