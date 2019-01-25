//create count in the data base
//localStorage.setItem("key", "value")
if (localStorage.getItem("count") == null) {
	localStorage.setItem("count",0)	
}

//update the html to reflect the database
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()
//add one to count
function plusOne(){
	localStorage.setItem("count",Number(localStorage.getItem("count"))+1)
	update()	
}

//reset count
function reset() {
	if (confirm("ARE YOUR SURE YOU WANT TO RESET!?!?!?")) {
		localStorage.setItem("count",0)
		update()
	}
}