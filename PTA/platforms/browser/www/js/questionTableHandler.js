var questionTableHandler=
{
	addQuestionToTable: function(prompt, answer1,answer2,answer3,answer4,correct,explanation,type)
	{
		databaseHandler.db.transaction(function(tx)
		{
			tx.executeSql("insert into Questions(inquisition,a1,a2,a3,a4,correct answer, Explanation,type) values(?,?,?,?,?,?,?,?)",
				[prompt, answer1,answer2,answer3,answer4,correct,explanation],function(tx,results){},function(tx,error)
				{
					console.log("insertion error" +error.message);
				}// endt transaction error report
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
	}// end addQuestionToTable function

}// end question table handler