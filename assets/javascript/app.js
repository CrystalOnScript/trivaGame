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

console.log(choiceArray);

console.log(choiceArray.indexOf("true"));

 function makeRadioButton(name, value, text) {

    var form = document.createElement("form");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;
  
    form.appendChild(radio);
    form.appendChild(document.createTextNode(text[0]));

    var radio2 = document.createElement("input");
    radio2.type = "radio";
    radio2.name = name;
    radio2.value = value;
    
    form.appendChild(radio2);


    form.appendChild(document.createTextNode(text[1]));
    return form;
  };


for(i = 0; i < questions.length ; i++){

	
	$("#displayQuestions").append("<p>"+ questions[i].question +"</p>");

	var list = questions[i].choices;

	
	var yes_button = makeRadioButton("yes", "yesyes", list);
  	$("#displayQuestions").append(yes_button);


};

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





	








