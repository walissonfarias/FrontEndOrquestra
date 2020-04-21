function splitTime(duration, startTime){

    const time = String (duration)
    const minutos = time.split(" ")

    let converte = Number(minutos[0])
    let cont=0;

    while(converte >= 60){
        converte-=60
        cont++;   
    }

    const time2 = String(startTime)
    
    var aux = time2.split(':')
    var hora = +aux[0];
    var minutoss = +aux[1];

    ( hora + cont > 24 ) ? hora = hora+cont -24 : hora+= cont;

    if( minutoss+converte > 60 ){
         minutoss = minutoss + converte - 60
         hora++
    }else{
        minutoss+=converte ;
    } 

    if(minutoss < 10) minutoss = "0" + minutoss
    
    if(minutoss === 60) {
        hora++
        return hora===24 ? "00:00": hora + ":00"
    }
        
    if(hora === 24) hora = "00"

    return  hora + ":" + minutoss
}
export default splitTime
