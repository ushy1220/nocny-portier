function change_color() {
	var color = document.getElementById("table7").style.color;
	if (color == "red"){
		document.getElementById("aaa").style.color="black";
	  	document.getElementById("aaa").style.backgroundColor="transparent";
	}            
	else {
                document.getElementById("aaa").style.color="red";
                document.getElementById("aaa").style.backgroundColor="blue";

	}
}