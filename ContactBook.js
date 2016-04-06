function addContactToPage(newName, buttonNumber) {

	var buttonElement = document.createElement('button');
	buttonElement.innerHTML = newName;
	buttonElement.className = "contactButton";
	var contactsElement = document.querySelector("#contacts");
	contactsElement.appendChild(buttonElement);
	buttonElement.onclick = function() {
		displayCurrentUserInformation(buttonNumber);
	}
}

allUsers.forEach(function(userObject, index) {
	addContactToPage(userObject.name, index);
});

function displayCurrentUserInformation(buttonNumber) {
	var currentUser = allUsers[buttonNumber];
	changename(currentUser.name);
	changenumber(currentUser.phoneNumber);
	changeaddress(currentUser.address);
}

function changename(someName){

	var userElement = document.getElementById("username");

	userElement.innerHTML = someName;

}

function changenumber(someNumber) {

	var userNumber = document.getElementById("number");

	userNumber.innerHTML = someNumber;

}

function changeaddress(someAddress) {

	var userAddress = document.getElementById("address");

	userAddress.innerHTML = someAddress;

}

function addToContacts(){

	var name = document.getElementById("nameInput").value;
	var number = document.getElementById("numberInput").value;
	var address = document.getElementById("addressInput").value;
	var user = {
		name: name,
		phoneNumber: number,
		address: address,
	};

	allUsers.push(user);
	console.log(allUsers);

	// Empty out the contacts list
	var contactsElement = document.querySelector("#contacts");
	contactsElement.innerHTML = '';
	// refill it with all the users, aka forEach
	allUsers.forEach(function(userObject, index) {
	addContactToPage(userObject.name, index);
}); 
}


