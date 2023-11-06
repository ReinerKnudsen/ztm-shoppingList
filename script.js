
let button = document.querySelector("#enter");
let input = document.querySelector("#user-input");
let ul = document.querySelector("ul");

function inputLength(){
	return input.value.length > 0;
}

function createListElement(){
	let div = document.createElement("div");
	let li = document.createElement("li");
	let deleteButton = document.createElement("button");
	div.classList.add("wrapper");
	deleteButton.classList.add("trash");
	deleteButton.innerHTML = "Delete";

	li.appendChild( document.createTextNode( convertInput(input.value) ));
	div.append(li, deleteButton);
	ul.appendChild(div);
	input.value = "";
}

function addListItemOnClick(){
	if( inputLength() ){
		createListElement();
	}
}

function addListItemOnEnter(event){
	if( inputLength() && event.key === "Enter"){
		createListElement();
	}
}

function convertInput(strInput){
	return strInput[0].toUpperCase() + strInput.slice(1).toLowerCase(); 
}

function handleListElement(element){
	if (element.target.tagName === "LI"){
		element.target.classList.toggle("done");
		element.target.nextElementSibling.classList.toggle("hidden");
	};
	if (element.target.className === "trash"){
		element.target.parentElement.remove();
		input.focus();
	}
}

button.addEventListener("click", addListItemOnClick)
input.addEventListener("keydown", addListItemOnEnter)
ul.addEventListener("click", handleListElement)




