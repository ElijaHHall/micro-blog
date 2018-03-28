



const bloggersForm = document.getElementById("bloggers-form");
	
bloggersForm.addEventListener("submit", function(e){
		e.preventDefault();

		const value = bloggersForm.querySelector('input[type="text"]').value;

		console.log(value);
}); 