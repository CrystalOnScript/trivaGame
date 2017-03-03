$(document).ready(function(){

	$("#bigDiv").hide();
	$("#finalDiv").hide();
	$("#timeDiv").hide();
	
	var right = 0;
	var wrong = 0;
	var userAnswer = [];
	var questionAnswer = [];


	var questions = [
		{
		question: "A full dishwasher will use less water than washing the dishes by hand.",
		choices: ["true", "false"],
		correctAnswer: 0,
		},
		{
		question: "Appliances that are turned off don't use any electricity.",
		choices: ["true", "false"],
		correctAnswer: 1,
		},
		{
		question: "It is better to leave a lamp with a eco-friendly bulb on all day, than to turn it on and off.",
		choices: ["true", "false"],
		correctAnswer: 1,
		},

	];

$("#goBtn").on("click", function(){
		secondpage();
		$("#otherDiv").hide();
		$("#finalDiv").hide();
		$("#bigDiv").show();
		$("#timeDiv").show();
	})
for(i = 0; i < questions.length ; i++){
	var choiceArray = questions[i].choices;
	questionAnswer.push(questions[i].correctAnswer);
	// console.log(questionAnswer);
}

		var secondpage = function(){

	  setTimeout(tenSeconds, 1000*2);
	  var timeUpVar = setTimeout(timeUp, 1000*3);
	  timeUpVar;

	  var stopTimeout = function(){
	  	clearTimeout(timeUpVar);
	  };



	      function tenSeconds() {

	        $("#timeDiv").html("<h2>About 5 Seconds Left!</h2>");
	        console.log("5 seconds left");

	      }


	      function timeUp() {
	        $("#timeDiv").html("<h2>Times Up!</h2>");
	        console.log("done");
	        for(i = 0; i < isRadio.length ; i++){

		 		// get user input value from radio buttons
		 		if(isRadio[i].checked === true){
		 		var int = parseInt(isRadio[i].value);	
		 		userAnswer.push(int);	

		 		};

		 	};
		 	 		console.log(userAnswer);

		 	 // compare user input value with correct answers
		 	for(i = 0; i < questionAnswer.length ;i++){

		 		if(userAnswer[i] === questionAnswer[i]){
		 			right++;
		 		}


		 		if(userAnswer[i] !== questionAnswer[i]){
		 			wrong++;
		 		};

		 		console.log("right " + right);
				console.log("wrong " + wrong);

		 	};

		 	$("#otherDiv").hide();
			$("#bigDiv").hide();
			$("#timeDiv").hide();
			$("#finalDiv").show();
			$("#finalDiv").html("<h1>Finished!</h1><p>Your Score</p><p>Right: "+ right +"</p><p>Wrong: "+wrong+"</p>")

	      }	

		 function makeRadioButton(name, value, text) {

		    var form = document.createElement("form");
		    var radio = document.createElement("input");
		    radio.type = "radio";
		    radio.name = name;
		    radio.value = value[0];

		  
		    form.appendChild(radio);
		    form.appendChild(document.createTextNode(text[0]));

		    var radio2 = document.createElement("input");
		    radio2.type = "radio";
		    radio2.name = name;
		    radio2.value = value[1];


		    form.appendChild(radio2);


		    form.appendChild(document.createTextNode(text[1]));
		    return form;
		  };

		// var trueOrFalse = choiceArray.indexOf();

		for(i = 0; i < questions.length ; i++){

			var list = questions[i].choices;	
			$("#displayQuestions").append("<p>"+ questions[i].question +"</p>");

			// for(k = 0; k < choiceArray.length ; k++){
				
				var yes_button = makeRadioButton("yes", [0,1], list);
		  	
			// };
				$("#displayQuestions").append(yes_button);

		};



		$(".radioButton").on("click", function(){
			console.log($(this))
		});

		var isRadio = $("input[type = 'radio']");
		 	console.log(isRadio);
		


		 $("#submitBtn").on("click", function(){

		 	stopTimeout();
		 	// loop through questions
		 	for(i = 0; i < isRadio.length ; i++){

		 		// get user input value from radio buttons
		 		if(isRadio[i].checked === true){
		 		var int = parseInt(isRadio[i].value);	
		 		userAnswer.push(int);	

		 		};

		 	};
		 	 		console.log(userAnswer);

		 	 // compare user input value with correct answers
		 	for(i = 0; i < questionAnswer.length ;i++){

		 		if(userAnswer[i] === questionAnswer[i]){
		 			right++;
		 		}


		 		if(userAnswer[i] !== questionAnswer[i]){
		 			wrong++;
		 		};

		 		console.log("right " + right);
				console.log("wrong " + wrong);

		 	};

		 	$("#otherDiv").hide();
			$("#bigDiv").hide();
			$("#timeDiv").hide();
			$("#finalDiv").show();
			$("#finalDiv").html("<h1>Finished!</h1><p>Your Score</p><p>Right: "+ right +"</p><p>Wrong: "+wrong+"</p>")


		 });

		

	}	 


		 	


});


// create functiont to call after user clicks start

// secondpage();
// console.log("right " + right);
// console.log("wrong " + wrong);






	








