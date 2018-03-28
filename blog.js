const bloggersForm = document.getElementByid("bloggers-form");
	bloggersForm.addEventListener("submit", function(e) {
		e.preventDefault();

		let userName = document.getElementByid('user-name').value;

		console.log(userName)
	});
	