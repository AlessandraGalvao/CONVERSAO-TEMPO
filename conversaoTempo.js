var segundos = 3600;
let horas, minutos, parte, restoH; 

if  (segundos%3600 == 0) {
   horas = parseInt(segundos/3600);
   segundos = 0;
   minutos=0;
}else if (segundos>=3600){
    horas = parseInt(segundos/3600);
    restoH = (segundos -(horas*3600))/60;
    parte = math.modf(restoH);
    minutos=parseInt(parte[1]);
    segundos=parseInt(round(parte[0]));
}else{ 
    horas=0;
    minutos =  parseInt(segundos/60);
    segundos = parseInt(segundos - (minutos*60));
}

console.log("%d:%d:%d", horas, minutos, segundos)