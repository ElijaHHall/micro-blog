



const bloggersForm = document.getElementById("bloggers-form");
	
bloggersForm.addEventListener("submit", function(e){
		e.preventDefault();

		const value = bloggersForm.querySelector('input[type="text"]').value;

		console.log(value);
}); 
// if (sessionStorage.clickcount) {
// 	sessionStorage.clickcount = Number(sessionStorage.clickcount)
// 	+ 1;
// } else {
// 	sessionStorage.clickcount = 1;
// }
// document.getElementById("bloggers-form").innerHTML = "You have clicked the button " +
// sessionStorage.clickcount + " time(s) in this session.";

var btn = document.createElement("POST");
var t = document.createTextNode("CLICK");

btn.appendChild(t);
document.body.appendChild(btn);




// const form = document.getElementById("bloggersForm")

// form.addEventListener("submit", function(e){
	
// 	e.preventDefault()
// 	console.log("")
// });


// let inputValue =