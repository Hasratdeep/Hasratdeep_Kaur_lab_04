document.addEventListener("DOMContentLoaded",function(){
    const form = document.getElementById("eventRegistrationForm");

//Form submission Event Listner
form.addEventListener("submit",function(event) {
    event.preventDefault();
    console.warn("Form submitted.");
    });
});

//Validate the number Input from numbers 1 to 15
const numTicketsInput = document.getElementById("numTickets");
const isValid = ValidateNumberInput(numTicketsInput, 1 , 5 , 15);
if (isValid) {
    console.warn("Valid input of the ticket number.");
} 
else {
    console.warn("Invalid input of the ticket number.");
}

//Displaying the validation messages
if (errormessage) {
    let errorElement = document.createElement("span");
    errorElement = errormessage;
    inputElement.parentElement.appendChild(errorDisplay)
}


//Displays an error message for a specified input element.

function showInputError(inputElement, errormessage) {
	const errorDisplay = document.createElement("span");
	errorDisplay.innerText = errormessage;
	errorDisplay.className = "error-message";
	inputElement.parentElement.appendChild(errorDisplay);
}

// Usage in Validation
if (Username === "") {
	showInputError(document.getElementById("Username"), "Username is required");
}
if (email === "") {
	showInputError(document.getElementById("email"), "email is required");
}
if (text  === "") {
	showInputError(document.getElementById("text"), "text is required");
}

const showError = (fieldName, message) => {
	const errorFieldId = `${fieldName}Error`;
	const errorField = document.getElementById(errorFieldId);

	if (!errorField) {
		console.error(`Error field with ID '${errorFieldId}' not found.`);
		return;
	}

	errorField.textContent = message;
	errorField.classList.add("error-visible");
};

const clearErrors = () => {
	const errorMessages = document.querySelectorAll(".error-message");
	errorMessages.forEach((errorField) => {
		errorField.textContent = "";
		errorField.classList.remove("error-visible");
	});
};
document
	.getElementById("userForm")
	.addEventListener("submit", function (event) {
		event.preventDefault(); 

		// Clear any existing error messages
		clearErrors();

		// Validate the input
		const userName = document.getElementById("userName").value.trim();
		if (userName === "") {
			showError("userName", "UserName cannot be empty");
		} else {
			// If validation passes, you could submit the form or do something else
			console.log("Form submitted!");
		}
	});