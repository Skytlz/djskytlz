
function randomText(){
	"use strict";
	var x = Math.floor(Math.random()*101);
	if(x<5){
		document.getElementById("header").innerHTML="9u32iojh4";
		document.getElementById("title").innerHTML=x;
		
	}else{
		document.getElementById("header").innerHTML="Coming Soon!";
		document.getElementById("title").innerHTML=x;
	}
}
randomText();
