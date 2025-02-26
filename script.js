document.addEventListener("DOMContentLoaded",function(){
    const form = document.getElementById("eventRegistrationForm");

//Form submission Event Listner
form.addEventListener("submit",function(event) {
    event.preventDefault();
    console.warn("Form submission.");
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
    let errorElement = document.createElement(span);
    errorElement = errormessage;
}
