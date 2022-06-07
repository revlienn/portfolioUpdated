// Email address validation
function ValidateEmail(inputText) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (inputText.value.match(mailformat)) {
		return true;
	} else {
		alert("Please enter a valid email address!");
		document.contactForm.email.focus();
		document.contactForm.email.style.border = "red";
		return false;
	}
}

// Clear message box on load
window.addEventListener("load", () => {
	const msgBox = document.querySelector("#messageBox");
	msgBox.value = "";
});
