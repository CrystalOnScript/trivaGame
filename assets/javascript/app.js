var right = 0;
var wrong = 0;
var unanswered = 0;



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
	}
];

for(i = 0; i < questions.length ; i++){
var choiceArray = questions[i].choices;
}

for(i = 0; i < choiceArray.length ; i++){
	console.log("choiceArray" + i);
	trueOrFalse = i;
}







var choiceTrue = choiceArray.indexOf("true");
var choiceFalse = choiceArray.indexOf("false");

console.log(choiceFalse);

 function makeRadioButton(name, value, text) {

    var form = document.createElement("form");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;
    radio.class = choiceTrue;
  
    form.appendChild(radio);
    form.appendChild(document.createTextNode(text[0]));

    var radio2 = document.createElement("input");
    radio2.type = "radio";
    radio2.name = name;
    radio2.value = value;
    radio2.class = choiceFalse;

    form.appendChild(radio2);


    form.appendChild(document.createTextNode(text[1]));
    return form;
  };

// var trueOrFalse = choiceArray.indexOf();

for(i = 0; i < questions.length ; i++){

	var list = questions[i].choices;	
	$("#displayQuestions").append("<p>"+ questions[i].question +"</p>");

	// for(k = 0; k < choiceArray.length ; k++){
		
		var yes_button = makeRadioButton("yes", trueOrFalse, list);
  	
	// };
		$("#displayQuestions").append(yes_button);

};



$(".radioButton").on("click", function(){
	console.log($(this))
});

var isRadio = $("input[type = 'radio']");
 	console.log(isRadio);
	

 $("#submitBtn").on("click", function(){


 	// loop through questions
 	for(i = 0; i < isRadio.length ; i++){

 		if(isRadio[i].checked === true){
 		console.log(isRadio[i]);
 		};

 	};
 });


 	// get user input value from radio buttons


 	// compare user input value with correct answers

 	// return how many right

 	// return how many wrong

 	// return how many unanswered 





	








