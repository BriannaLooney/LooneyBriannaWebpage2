//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;
	
	console.log('Variable myRecipientName: ' + myRecipientName);
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;

// Function to update the invitation message
function updateInvitation() {
    // Get input values
    var recipientName = document.getElementById("recipientInput").value;
    var organizationName = document.getElementById("organizationInput").value;
    var eventDate = document.getElementById("eventDateInput").value;
    var hostName = document.getElementById("hostInput").value;

    // Update the DOM elements with the input values
    document.getElementById("recipientName").textContent = recipientName;
    document.getElementById("organizationName").textContent = organizationName;
    document.getElementById("eventDate").textContent = eventDate;
    document.getElementById("hostName").textContent = hostName;
}
