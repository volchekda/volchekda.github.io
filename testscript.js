
    
	
	
while ( true )
{  
    var name = prompt ("ИМЯ ПОЛЬЗОВАТЕЛЯ?","");
   if (name !="" && name !="null"){
	break;   
   }  
    alert( "ВВЕДИТЕ ВАШЕ ИМЯ");
}
while ( true ){
	var old = prompt("ВОЗРАCТ ПОЛЬЗОВАТЕЛЯ");
	if (old !="" && old>0)break;
    alert( "ВВЕДИТЕ ВАШ ВОЗРАСТ"); 	
	
}
function test(){
		if (old <18){
			alert("Здарова,"+" " + name+"."+" "+"Как твои"+" " +old);
		}
		else{
			alert("Привествую,"+" " + name+"."+" " +"Уж"+" " +old+" "+"лет прошло")
		}
	}
	test();