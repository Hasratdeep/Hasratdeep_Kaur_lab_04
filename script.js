document.addEventListener("DOMContentLoaded",function(){
    const form = document.getElementById("eventRegistrationForm");

//Form submission Event Listner
form.addEventListener("submit",function(event) {
    event.preventDefault();
    console.log("Form submission.");
    });
});
