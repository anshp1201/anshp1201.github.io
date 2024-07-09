


function validateSignUpForm(){
	const username = document.getElementById("InputUser");
	const email = document.getElementById("InputEmail");
	const password = document.getElementById("InputPassword");
	const passwordR = document.getElementById("InputPasswordR");

	const username_error = document.getElementById("UserError");
	const email_error = document.getElementById("EmailError");
	const password_error = document.getElementById("PassError");
	const passwordR_error = document.getElementById("PassRError");
				
	username_error.textContent="";
	email_error.textContent="";
	password_error.textContent="";
	passwordR_error.textContent="";
				
	let isValid=true;
	
	if (username.value === "") {
		username_error.textContent ="Please enter username";
		isValid = false;
	}
				
	if (email.value === "" || !email.value.includes("@")) {
		email_error.textContent ="Please enter a valid email address";
		isValid = false;
	}
				
	if (password.value === "") {
		password_error.textContent ="Please set a password ";
		isValid = false;
	}
				
	if (passwordR.value === "" || !passwordR===password) {
		passwordR_error.textContent ="Passwords do not match";
		isValid = false;
	}

	return isValid;


}

function validateLoginForm(){
	const email = document.getElementById("InputEmail");
	const password = document.getElementById("InputPassword");
	
	const email_error = document.getElementById("EmailError");
	const password_error = document.getElementById("PassError");
	
	email_error.textContent="";
	password_error.textContent="";
	
	let isValid=true;
	
	if (email.value === "" || !email.value.includes("@")) {
		email_error.textContent ="Please enter a valid email address";
		isValid = false;
	}
				
	if (password.value === "") {
		password_error.textContent ="Please enter a password ";
		isValid = false;
	}
	
	return isValid;

}

function validateRegisterEvent(){
	const eventName = document.getElementById("EventName");
	const eventDate = document.getElementById("EventDate");
	const eventDetails = document.getElementById("EventDetails");
	
	const name_error = document.getElementById("EventNameError");
	const date_error = document.getElementById("EventDateError");
	const details_error = document.getElementById("EventDetailsError");
	
	
	name_error.textContent="";
	date_error.textContent="";
	details_error.textContent="";
	
	//let eventDateObj = new Date()
	
	let isValid=true;
	
	let eventDateObj = new Date(eventDate.value);
	
	if(eventName.value ===""){
		name_error.textContent = "Enter an Event name";
		isValid=false;
	}
	
	if(eventDetails.value ===""){
		details_error.textContent = "Enter Event details";
		isValid=false;
	}
	
	if(isNaN(eventDateObj)){
		date_error.textContent = "Enter a valid Date";
		isValid=false;
		
	}
	
	return isValid;

}

function RegistrationComplete(){
	javascript:alert('Event Registered and waiting for approval');
	
	window.location.href="dashboard.html";

}












