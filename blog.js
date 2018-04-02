

// const bloggersForm = document.getElementByid("bloggers-form");
// 	bloggersForm.addEventListener("submit", function(e) {
// 		e.preventDefault();

// 		const value = bloggersForm.querySelector("input[type="text"]").value;

// 		console.log(value);

// 	});

$(function() {
	
	const $form = $("#bloggersForm");

	$form.on("submit", function(event) {
	event.preventDefault();


	let $bloggersValue = $("#typeStuff").val();

	$("ol").append("<li>" + $bloggersValue + "</li>");

	$bloggersValue = $("#typeStuff").val('');

});

	});