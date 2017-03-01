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



  function makeRadioButton(name, value, text) {

    var form = document.createElement("form");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;

    form.appendChild(document.createTextNode(text[0]));

    var radio2 = document.createElement("input");
    radio2.type = "radio";
    radio2.name = name;
    radio2.value = value;

    form.appendChild(radio);
    form.appendChild(radio2);


    form.appendChild(document.createTextNode(text[1]));
    return form;
  }

var display = document.getElementById("displayQuestions");

for(i = 0; i < questions.length ; i++){

	questionApp = questions[i];
	$("#displayQuestions").append("<p>"+ questions[i].question +"</p>");

	var list = questions[i].choices;

	var yes_button = makeRadioButton("yesbutton", "yes", list);
  	$("#displayQuestions").append(yes_button);


}


	








