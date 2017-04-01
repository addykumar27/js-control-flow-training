console.log("security_questions.js is loaded");

var securityQuestions [ { question: "What is you the city you were born in?",
expectedAnswer: "California"
}
{ question: "Which city does your best friend live in?",
expectedAnswer: "Hayward"
}
{ question: " What is your mother's maiden name?", expectedAnswer: "Robinson"
}
]
for (var i=0; i < securityQuestions.length; i++){
   	userInputAnswer = prompt(securityQuestions[i].question);
    if (userInputAnswer !== securityQuestions[i].expectedAnswer){
		alert("Wrong Security Answer!");
