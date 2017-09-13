var questionTableHandler=
{
	addQuestionToTable: function(prompt, answer1,answer2,answer3,answer4,correct,explanation,type) // prompts to pass the info into the table
	{
		databaseHandler.db.transaction(function(tx)
		{
			tx.executeSql("insert into questions(inquisition, a1 ,a2 ,a3 ,a4 ,correct,explanation,type) values (?,?,?,?,?,?,?,?);",
				[prompt, answer1,answer2,answer3,answer4,correct,explanation,type],function(tx,results){},function(tx,error)
				{
					console.log("insertion error" +error.message);
				}// end transaction error report
				);//end execute statement
		}, // end sql piece 
		function(error)
		{
			console.log("transaction error" + error.message);
		},//end error piece
		function()
		{
			console.log("added Question successfully");
		}// end success piece

		);// end transaction
	},// end addQuestionToTable function
    selectQuestions: function()
	{
		databaseHandler.db.transaction(function(tx)
		{
			tx.executeSql("SELECT * FROM Questions",
                {
                    //console.log(results);
                },// end condition when success
                function(tx,error)
				{
					console.log("selection error" +error.message);
				}// end selection error report
				);//end execute statement
		}, // end sql piece 
		function(error)
		{
			console.log("transaction error" + error.message);
		},//end error piece
		function()
		{
			console.log("selected successfully");
		}// end success piece

		);// end transaction
	}// end addQuestionToTable function

}// end question table handler