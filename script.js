var logo = document.getElementById("logo");
var getItDoneToday = document.getElementById("first");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var originialListItems = document.querySelectorAll("span:nth-child(1)");
var originialListCrosses = document.querySelectorAll("span:nth-child(2)");

function inputLength() {
	return input.value.length;
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossItem(event){
	event.path[0].classList.toggle("done");
}

function deleteItem(event){
	event.path[1].classList.add("animated","slideOutRight");
	setTimeout(function(){
		event.path[2].removeChild(event.path[1])
	},1000);
}

function createListElement() {
	var li = document.createElement("li");
	var item = document.createElement("span");
	var cross = document.createElement("span");
	item.appendChild(document.createTextNode(input.value));
	item.addEventListener("click", crossItem);
	cross.appendChild(document.createTextNode("X"));
	cross.addEventListener("click", deleteItem);
	li.appendChild(item);
	li.appendChild(document.createTextNode(" "))
	li.appendChild(cross);
	ul.appendChild(li);
	input.value = "";
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

originialListItems.forEach(function(item){
	item.addEventListener("click", crossItem);
});

originialListCrosses.forEach(function(item){
	item.addEventListener("click", deleteItem);
});

logo.addEventListener("mouseenter",function(){
	logo.classList.add("animated","infinite","bounce");
})

getItDoneToday.addEventListener("mouseenter",function(){
	getItDoneToday.classList.add("animated","infinite","tada");
})