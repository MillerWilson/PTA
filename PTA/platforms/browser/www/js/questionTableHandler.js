var questionTableHandler=
{
	addQuestionToTable: function(prompt, answer1,answer2,answer3,answer4,correct,explanation,type)
	{
		databaseHandler.db.transaction(function(tx)
		{
			tx.executeSql("insert into Questions(inquisition,a1,a2,a3,a4,correct answer, Explanation,type) values(?,?,?,?,?,?,?,?)",
				[prompt, answer1,answer2,answer3,answer4,correct,explanation],function(tx,results){},function(tx,error)
				{
<<<<<<< HEAD
					console.log("insertion error with sql " +error.message);
				}// end transaction error report
=======
					console.log("insertion error" +error.message);
				}// endt transaction error report
>>>>>>> parent of d0eeee0... updated plugin stuff
				);//end execute statement
		}, // end sql piece 
		function(error)
		{
			console.log("transaction error on insert question " + error.message);
		},//end error piece
		function()
		{
			console.log("added Question successfully");
		}// end success piece

		);// end transaction
<<<<<<< HEAD
	},// end addQuestionToTable function
    selectQuestions: function(displayRecord)
	{
		databaseHandler.db.readTransaction(function(tx)
		{
			tx.executeSql("SELECT * FROM Questions",[],
                function(tx, results)
				{ 
                    console.log('selected questions successfully')
					displayRecord(results);
				},
                function(tx, error)
                {
                    console.log("selection error with sql " +error.message);
                } // end selection error report
			);//end execute statement
		}, // end sql piece 
		function(error)
		{
			console.log("transaction error on select handler " + error.message);
		},//end error piece
		function()
		{
			console.log("selected successfully");
		}// end success piece

		);// end transaction
=======
>>>>>>> parent of d0eeee0... updated plugin stuff
	}// end addQuestionToTable function

}// end question table handler