function calcular(evento){
	evento.preventDefault();
	let bill = document.getElementById("bill").value;
	let serviceQuality = document.getElementById("serviceQuality").value;
	let people = document.getElementById("people").value;

	if(people <= 1){
			document.getElementById('each').style.display = "none";
	}else{
		document.getElementById('each').style.display = "block";
	}

	let total = (bill * serviceQuality) / people;
	total = total.toFixed(2); //fica quantas casas decimais irão aparecer

	document.getElementById("tip").innerHTML = total;
	document.getElementById("totalTip").style.display = "block";


}

document.getElementById("totalTip").style.display ="none";
document.getElementById("tipsForm").addEventListener("submit", calcular);