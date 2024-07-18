function getFormvalue() {
    //Write your code here
			const inputs = document.querySelectorAll("input");

			let firstName = inputs[0].value;
			let lastName = inputs[1].value;

					alert(firstName + " " + lastName);

}
