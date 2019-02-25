window.onload = function(){
	let kol =document.querySelector("#kol");
	let wier = document.querySelector("#wier");
	let table = document.querySelector("#table");
	let tds = document.querySelectorAll("td");
	let wynik = document.querySelector("#wynik");
	let broz = document.querySelector("#broz").onclick = function(){
		if(!Validate2(kol) || !Validate(wier)){
			return;
		}else{
			let html = "<table>";
			a = 0 
			for(let i=0 ; i<= parseInt(wier.value)-1 ; i++ ){
				html += "<tr>";
					for(let j=1 ; j <= parseInt(kol.value) ; j++){
						html += "<td>"+ (a++) +"</td>";
					}	
				html += "</tr>";
			}
			html += "</table>";
			table.innerHTML = html;
			}
			pom2();	
	}
	let bgen = document.querySelector("#bgen").onclick = function(){
    	function isPrime(num){
    	if(num < 2) return false;
    		for (let i = 2; i < num; i++) {
      	  		if(num % i == 0)
            	return false;
    		}
    			return true;
    	}

    	let table = document.querySelector("#table");
    	let tds = document.querySelectorAll("td");
			for(let i = 0; i < a; i++){
    			if(isPrime(i)) {
    			tds[i].style.backgroundColor = "red"; 

        	}
		}
		
	}
}
		function pom2(){
			let tds = document.querySelectorAll("td");
			let wynik = document.querySelector("#wynik");
			for(let i = 0 ; i<= tds.length ; i++){
			tds[i].onmousedown = function(){		
				pom(i);
				wynik.style.opacity = 1;
			}	
			tds[i].onmouseup= function(){
				wynik.style.opacity = 0;
				wynik.innerHTML = "";
			}
		}
	}
		function pom(num){
			let wynik = document.querySelector("#wynik");
			let tds = document.querySelectorAll("td");	
			let tab=[];
				for(let i=1 ; i<=num ; i++){
					if(num % i === 0){
					tab.push(i);
				}else{
					continue;
				}	
			}
			wynik.innerHTML =tab;
		}

function Validate(elem){
	let table = document.querySelector("#table");
	if(elem.value>=1){
		table.innerHTML = "";
		return true;
	}else{
		table.innerHTML = "Brak liczny wierszy lub podane 0/liczba ujemna!!!"
		return false;
	}
}
function Validate2(elem){
	let table = document.querySelector("#table");
	if(elem.value>=1){
		table.innerHTML = "";
		return true;
	}else{
		table.innerHTML = "Brak liczny kolumn lub podane 0/liczba ujemna!!!"
		return false;
	}
}
